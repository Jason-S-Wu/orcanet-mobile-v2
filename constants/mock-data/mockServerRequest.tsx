import {MarketInfo} from '../types';
import {mockMarketData1} from './mockData';

//mock server response for testing purpose can be removed once we connec to peer
export const fetchFromServer = (fileName: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({success: true});
    }, 2000); // Adjust the timeout as needed
  });
};

// TODO: need to connect to peernode to fetch file if success
export const getDataFromMarketRequest = (
  hash: string
): Promise<MarketInfo | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Request here
      // If file is found, resolve the promise with the file data, otherwise resolve with null

      // Mock example
      resolve(mockMarketData1);
    }, 2000); // Adjust the timeout as needed
  });
};

// TODO: need to connect to blockchain to store transaction if success
export const buyFileRequest = (fileInfo: MarketInfo): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success or failure randomly
      const success = true;
      if (success) {
        resolve('success'); // Resolve the promise for success
      } else {
        reject('Error');
      }
    }, 2000); // Adjust the timeout as needed
  });
};
