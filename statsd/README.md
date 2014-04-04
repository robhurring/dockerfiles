# Statsd

## Info

Localhost doesn't work for `GRAPHITE_HOST` so I had to find the graphite container's IP using `docker inspect $ID` and using that.

## Running

`GRAPHITE_HOST=$(docker inspect -format '{{.NetworkSettings.IPAddress}}' graphite)`

`docker run -d -name statsd -e GRAPHITE_HOST=$GRAPHITE_HOST -P statsd`
