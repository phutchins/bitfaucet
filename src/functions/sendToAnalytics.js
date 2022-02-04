export default function sendToAnalytics (metric) {
  const body = JSON.stringify(metric);
  const url = 'https://sense.portaldefi.com';

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  if (navigator && navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}
