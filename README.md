# OrcaNet Mobile v2

Stony Brook University CSE 416 Project

OrcaNet Mobile v2 is a React Native application developed as part of the CSE 416 project at Stony Brook University.

## Getting Started

These instructions will guide you through setting up the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have the latest version of Node.js installed on your machine.

- npm: npm usually comes with Node.js, but it's a good practice to ensure it's up to date. You can update it by running `npm install -g npm`

- Expo Go: Install Expo Go on your iOS or Android device. You can find it on the App Store for iOS devices or Google Play Store for Android devices.

### Setting up the development environment

1. Clone the repository: Start by cloning the repository onto your local device. You can do this by running the following command in your terminal:

    ```bash
    git clone <repository-url>
    ```

2. Install dependencies: Install the project dependencies using npm. Run the following command:

    ```bash
    npm install
    ```

3. Start the development server: Start the Expo development server by running the following command:

    ```bash
    npx expo start
    ```
    This command will start the development server and provide you with a QR code.


4. Run the application on your device: Open Expo Go on your iOS or Android device and scan the QR code displayed in the terminal. This will allow Expo Go to fetch the application bundle from the development server and run it on your device.

    Note: if it take a long time to fetch the application bundle and time out, then you could try the tunneling option instead with this command:

    ```bash
    npx expo start --tunnel
    ```