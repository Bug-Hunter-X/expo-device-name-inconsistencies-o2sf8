# Expo Constants.deviceName Inconsistency

This repository demonstrates a bug where `Constants.deviceName` in the Expo SDK returns an empty string inconsistently across devices.  The issue affects the reliability of device identification within applications.

## Bug Description

The `Constants.deviceName` property, expected to return the device's name, occasionally returns an empty string, even on devices where a name is normally available.  This leads to problems in applications that rely on this property for tasks like device-specific configurations or analytics.

## Reproduction

The `bug.js` file contains a simple example that demonstrates the inconsistent behavior.  Run the application on different devices and observe the output of `Constants.deviceName`.

## Solution

The `bugSolution.js` file provides a potential workaround.  Instead of relying solely on `Constants.deviceName`, it uses a combination of other device information (such as `Constants.deviceId` and `Constants.platform`) to create a more reliable device identifier. This ensures that a unique identifier is available even if `Constants.deviceName` is empty.

## Note

This solution is a workaround; the ideal solution would be a fix in the Expo SDK itself to ensure consistent and reliable retrieval of device names.