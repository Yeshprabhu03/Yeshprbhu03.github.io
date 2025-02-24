const https = require('https');
const assert = require('assert');

const checks = [
  {
    url: 'https://yeshwanthdayananda.github.io',
    expectedTitle: 'Yeshwanth Dayananda - Product Management Portfolio'
  },
  {
    url: 'https://yeshwanthdayananda.github.io/#about',
    expectedSection: 'about'
  }
];

async function verifyDeployment() {
  try {
    for (const check of checks) {
      // Add delay between checks
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log(`Checking ${check.url}...`);
      const response = await fetch(check.url);
      
      if (!response.ok) {
        console.log(`Status: ${response.status} ${response.statusText}`);
        throw new Error(`Failed to load ${check.url}`);
      }
      
      console.log(`✅ ${check.url} is accessible`);
    }
    console.log('🚀 Deployment verified successfully!');
  } catch (error) {
    console.error('❌ Deployment verification failed:', error.message);
    process.exit(1);
  }
}

verifyDeployment(); 