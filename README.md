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

### Index Page
The index page lists files that have been downloaded. Each file is in a card block that indicates its size and associated hash. Each card block also has a delete and view option. Clicking into the view option results in a viewer tab, allowing the user to view the file in the device's native viewer. 

### Market Page
The Market page lists files that are available in the market. There is a search bar to look up a desired file. The files have a view details button that shows more information such as the file hash, cost per MB, size, User ID, IP, and Port. The option to Buy File is also present to purchase the file and have it downloaded into local storage. 

### Profile Page
The Profile page is split into four sections: Account, Statistics, Transactions, and Settings. The Account section shows the User ID and current balance of coins. The statistics shows a monthly data usage in MB. The transactions shows a list of transactions, with each transaction indicating the Transaction ID, status, date, price, and note indicating the file name. The settings tab has an option to generate a public and private key using SHA 256.  