import { storage, ref, listAll } from '../config/firebase';

export async function testFirebaseConnection() {
  try {
    // Test storage access
    const storageRef = ref(storage, 'resumes');
    await listAll(storageRef);
    console.log('✅ Firebase Storage connected successfully');
    return true;
  } catch (error) {
    console.error('❌ Firebase connection error:', error);
    return false;
  }
} 