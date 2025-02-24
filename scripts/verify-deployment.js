const https = require('https');
const assert = require('assert');

const checks = [
  {
    url: 'https://yeshprabhu03.github.io/Yeshprbhu03.github.io/',
    expectedTitle: 'Yeshwanth Dayananda - Product Management Portfolio'
  },
  {
    url: 'https://yeshprabhu03.github.io/Yeshprbhu03.github.io/#about',
    expectedSection: 'about'
  },
  // Add more checks as needed
];

async function verifyDeployment() {
  try {
    for (const check of checks) {
      const response = await fetch(check.url);
      assert(response.ok, `Failed to load ${check.url}`);
      console.log(`✅ ${check.url} is accessible`);
    }
    console.log('🚀 Deployment verified successfully!');
  } catch (error) {
    console.error('❌ Deployment verification failed:', error);
    process.exit(1);
  }
}

verifyDeployment(); 