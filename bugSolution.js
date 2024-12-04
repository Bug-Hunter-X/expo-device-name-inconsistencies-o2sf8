// bugSolution.js
import * as Constants from 'expo-constants';

export default function getReliableDeviceId() {
  const deviceName = Constants.deviceName || 'Unknown Device';
  const deviceId = Constants.deviceId;
  const platform = Constants.platform;

  // Create a more robust identifier by combining available data
  return `${platform}-${deviceId}-${deviceName}`;
}

// Example usage:
const reliableId = getReliableDeviceId();
console.log('Reliable Device ID:', reliableId); 