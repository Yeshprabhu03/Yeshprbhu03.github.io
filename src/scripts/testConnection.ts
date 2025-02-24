import { testFirebaseConnection } from '../utils/firebaseTest.js';
import { config } from 'dotenv';

// Load test environment variables
config({ path: '.env.test' });

async function runTest() {
  console.log('Starting Firebase connection test...');
  
  try {
    const isConnected = await testFirebaseConnection();
    if (isConnected) {
      console.log('✅ All Firebase services are working correctly');
      process.exit(0);
    } else {
      console.error('❌ Firebase connection failed');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Test failed with error:', error);
    process.exit(1);
  }
}

runTest(); 