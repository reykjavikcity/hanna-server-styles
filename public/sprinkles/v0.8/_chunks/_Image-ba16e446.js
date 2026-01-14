import { c as classes, o, m as modifiedClass } from "./jsxRuntime.module-dc826c75.js";
import { g as getSVGtext } from "./getSVGtext-b918ded2.js";
import "./i18n-a7278b6d.js";
import { t, h, _, p, a as _$1 } from "./compat.module-8e5010ff.js";
const useGetSVGtext = (imageSrc, altText) => {
  const [inlineSvg, setInlineSvg] = t(h(), "inlineSvg");
  const srcRef = t(_(imageSrc), "srcRef");
  p(() => {
    if (imageSrc) {
      getSVGtext(imageSrc, altText).then((code) => {
        if (!code) {
          return;
        }
        if (imageSrc === srcRef.current) {
          setInlineSvg({
            imageSrc,
            code
          });
        }
      });
    }
    srcRef.current = imageSrc;
    setInlineSvg(void 0);
  }, [imageSrc]);
  return inlineSvg;
};
var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-react/src/_abstract/_Image.tsx";
const Image = (props) => {
  const {
    src,
    altText = "",
    sources = [],
    preloadSrc,
    modifier,
    bem,
    inline,
    placeholder,
    focalPoint,
    className,
    wrapperProps = {}
  } = props;
  const _src = sources.length && preloadSrc || src;
  const imageSrc = _src || (sources[0] != null ? sources[0].srcset.split(" ")[0] : void 0);
  const imgLoading = preloadSrc ? "eager" : "lazy";
  const inlineSvg = useGetSVGtext(inline ? imageSrc : void 0, altText);
  const extraClasses = classes(className, wrapperProps.className) || void 0;
  const classNames = bem ? modifiedClass(bem, [modifier, !imageSrc && "missing"], extraClasses) : extraClasses;
  if (!imageSrc) {
    return placeholder ? o("span", {
      ...props.wrapperProps,
      className: classNames,
      children: placeholder !== true && placeholder()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, void 0) : null;
  }
  if (inline && inlineSvg) {
    const __html = inlineSvg.imageSrc === imageSrc ? inlineSvg.code : "";
    return o("span", {
      ...props.wrapperProps,
      className: classNames,
      dangerouslySetInnerHTML: {
        __html
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, void 0);
  }
  const wrapperStyles = wrapperProps.style;
  return o("picture", {
    ...props.wrapperProps,
    className: classNames,
    style: focalPoint ? {
      ...wrapperStyles,
      "--focalPoint": focalPoint
    } : wrapperStyles,
    children: [" ", sources.map((source, i) => o(_$1, {
      children: [o("source", {
        srcSet: source.srcset,
        media: source.media
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }, void 0), " "]
    }, void 0, true)), " ", o("img", {
      src: imageSrc,
      alt: altText,
      loading: imgLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, void 0), "  "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, void 0);
};
export {
  Image as I
};
