var referrer = new URL(document.referrer);
function getStyles(host) {
  let head = document.getElementsByTagName('HEAD')[0];
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = referrer+'assets/styles/idx.css';
  if(host !== "evatlanta.idxbroker.com") head.appendChild(link);
}
getStyles(referrer.hostname);
