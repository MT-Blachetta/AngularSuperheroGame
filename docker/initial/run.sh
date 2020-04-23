#!/usr/bin/env bash
docker run -d -p 8080:80 \
    -v $PWD/www:/usr/share/nginx/html:ro \
    -v $PWD/nginx:/etc/nginx:ro   \
    --name frontend_basics_initial frontend_basics_initial