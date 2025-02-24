const https = require('https');
const nodemailer = require('nodemailer');

const SITE_URL = 'https://yeshprabhu03.github.io/Yeshprbhu03.github.io/';
const CHECK_INTERVAL = 5 * 60 * 1000; // 5 minutes

function checkSite() {
  https.get(SITE_URL, (res) => {
    if (res.statusCode === 200) {
      console.log(`✅ Site is up - ${new Date().toISOString()}`);
    } else {
      notifyError(`Site returned status ${res.statusCode}`);
    }
  }).on('error', (err) => {
    notifyError(`Site check failed: ${err.message}`);
  });
}

function notifyError(message) {
  console.error(`❌ ${message} - ${new Date().toISOString()}`);
  // Add notification logic here (email, Slack, etc.)
}

// Start monitoring
setInterval(checkSite, CHECK_INTERVAL);
checkSite(); // Initial check 