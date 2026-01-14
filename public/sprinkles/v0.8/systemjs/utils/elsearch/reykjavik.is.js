System.register([], function(exports, module) {
  "use strict";
  return {
    execute: function() {
      const shouldQuery = exports("shouldQuery", (value, dataFields, props) => {
        const fields = dataFields.map(function(field, index) {
          return `${field}${Array.isArray(props.fieldWeights) && props.fieldWeights[index] ? `^${props.fieldWeights[index]}` : ""}`;
        });
        if (props.searchOperators) {
          return {
            query: value,
            fields,
            default_operator: props.queryFormat
          };
        }
        if (props.queryFormat === "and") {
          return [{
            multi_match: {
              query: value,
              fields,
              type: "bool_prefix",
              operator: "and"
            }
          }, {
            multi_match: {
              query: value,
              fields,
              type: "phrase",
              operator: "and"
            }
          }];
        }
        return [{
          multi_match: {
            query: value,
            fields,
            type: "best_fields",
            operator: "or",
            fuzziness: props.fuzziness ? props.fuzziness : 0
          }
        }, {
          multi_match: {
            query: value,
            fields,
            type: "phrase",
            operator: "or"
          }
        }];
      });
      const defaultQuery = exports("defaultQuery", (value, props) => {
        let finalQuery = null;
        let fields = [];
        if (value && value !== "") {
          if (Array.isArray(props.dataField)) {
            fields = props.dataField;
          } else {
            fields = [props.dataField];
          }
          if (props.searchOperators) {
            finalQuery = {
              simple_query_string: shouldQuery(value, fields, props)
            };
          } else {
            const filter = props.filter || void 0;
            finalQuery = {
              bool: {
                should: shouldQuery(value, fields, props),
                minimum_should_match: "1",
                filter
              }
            };
            if (props.exceptBundles && props.exceptBundles.length) {
              finalQuery.bool.must_not = {
                terms: {
                  bundle: props.exceptBundles
                }
              };
            }
          }
        }
        if (finalQuery && props.nestedField) {
          finalQuery = {
            nested: {
              path: props.nestedField,
              query: finalQuery
            }
          };
        }
        return finalQuery;
      });
      const getBundleCount = exports("getBundleCount", (key, buckets) => {
        var _a;
        return buckets && ((_a = buckets.find((bucket) => bucket.key === key)) == null ? void 0 : _a.doc_count) || 0;
      });
      const createElasticQuery = exports("createElasticQuery", (args) => {
        const {
          value,
          preference,
          aggs,
          size,
          from,
          _source,
          filter,
          exceptBundles
        } = args;
        return {
          preference,
          query: {
            ...defaultQuery(value, {
              fuzziness: "AUTO",
              fieldWeights: [10, 2, 1],
              dataField: ["label", "field_preview_text.value", "content"],
              queryFormat: "and",
              filter,
              exceptBundles
            })
          },
          aggs,
          size,
          from,
          sort: [{
            _score: {
              order: "desc"
            }
          }, {
            bundle_weight: {
              order: "desc"
            }
          }],
          _source
        };
      });
      const defaultSource = [
        "label",
        "field_summary",
        "url_alias",
        "url_internal",
        "rendered_search_result"
        // 'content',
      ];
      const defaultAggs = {
        bundle: {
          terms: {
            field: "bundle",
            order: {
              _count: "desc"
            }
          }
        }
      };
      const searchResultsPageQuery = exports("searchResultsPageQuery", (query) => {
        const {
          value,
          preference = "resultspage",
          size,
          aggs = defaultAggs,
          from,
          _source = defaultSource,
          filter
        } = query;
        return [createElasticQuery({
          value,
          preference,
          aggs,
          _source: false
        }), createElasticQuery({
          value,
          preference,
          size,
          from,
          _source,
          filter
        })];
      });
      const queryToString = exports("queryToString", (_query) => {
        const {
          preference,
          ...rest
        } = _query;
        return `{ "preference": "${preference}" }
${JSON.stringify({
          ...rest
        })}
`;
      });
      const cleanResult = (result) => {
        var _a, _b;
        const aggregateData = (_b = (_a = result.aggregations) == null ? void 0 : _a.bundle) == null ? void 0 : _b.buckets.reduce((prevBucket, {
          key,
          doc_count
        }) => {
          prevBucket[key] = doc_count;
          return prevBucket;
        }, {});
        return {
          totalHits: result.hits.total.value,
          items: result.hits.hits.map(({
            _source
          }) => _source),
          aggregateData
        };
      };
      const postQuery = exports("postQuery", (url, queries, signal) => {
        queries = Array.isArray(queries) ? queries : [queries];
        return fetch(url, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-ndjson"
          },
          signal,
          method: "POST",
          body: queries.map(queryToString).join("")
        }).then(async (data) => {
          const jsonData = await data.json();
          return jsonData.responses.map((result) => cleanResult(result));
        });
      });
    }
  };
});
