#! /bin/sh

# Extracting this into a standalone *.sh file (and NOT using yarn to invoke
# the cssserve binary) is required to make it possible to start the
# style server from an external repo/project — such as the hanna monorepo
NODE_ENV=production  node node_modules/.bin/cssserve --config cssserve-prod.json
