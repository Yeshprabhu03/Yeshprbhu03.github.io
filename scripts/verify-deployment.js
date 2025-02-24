const https = require('https');

const url = 'https://yeshprabhu03.github.io';

https.get(url, (res) => {
  if (res.statusCode === 200) {
    console.log('✅ Deployment verified successfully');
    process.exit(0);
  } else {
    console.error('❌ Deployment verification failed');
    process.exit(1);
  }
}).on('error', (err) => {
  console.error('❌ Deployment verification failed:', err);
  process.exit(1);
}); 