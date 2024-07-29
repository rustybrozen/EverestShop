#!/bin/sh

# Run dulieu.js first
node dulieu.js &

# Wait for dulieu.js to complete (if it needs to be synchronous, remove '&')
wait

# Run app.js
node app.js
