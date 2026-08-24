#!/usr/bin/env bash
set -e

if [ ! -f dist/index.html ]; then
  JS_FILE=$(ls dist/assets/index-*.js 2>/dev/null | head -n1 | xargs -n1 basename || true)
  CSS_FILE=$(ls dist/assets/styles-*.css 2>/dev/null | head -n1 | xargs -n1 basename || true)
  echo "Creating fallback dist/index.html using $JS_FILE and $CSS_FILE"
  mkdir -p dist
  cat > dist/index.html <<EOF
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Sweet Surprises</title>
EOF
  if [ -n "$CSS_FILE" ]; then
    echo "    <link rel=\"stylesheet\" href=\"./assets/$CSS_FILE\">" >> dist/index.html
  fi
  cat >> dist/index.html <<EOF
  </head>
  <body>
    <div id="root"></div>
EOF
  if [ -n "$JS_FILE" ]; then
    echo "    <script type=\"module\" src=\"./assets/$JS_FILE\"></script>" >> dist/index.html
  fi
  cat >> dist/index.html <<EOF
  </body>
</html>
EOF
fi
