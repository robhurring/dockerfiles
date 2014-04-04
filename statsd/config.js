(function() {
  return {
    graphitePort: Number(process.env.GRAPHITE_PORT) || 2003,
    graphiteHost: process.env.GRAPHITE_HOST || "localhost",
    port: Number(process.env.STATSD_PORT) || 8125,
    backends: [ "./backends/graphite" ],
    debug: true,
    dumpMessages: true,
    flushInterval: 1000
  };
})();

