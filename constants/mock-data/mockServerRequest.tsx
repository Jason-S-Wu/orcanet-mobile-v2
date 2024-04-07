import {MarketInfo} from '../types';
import { mockMarketData1 } from "./mockData";

//mock server response for testing purpose can be removed once we connec to peer
export const fetchFromServer = (fileName: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({success: true});
    }, 2000); // Adjust the timeout as needed
  });
};

export const getDataFromMarketRequest = (hash: string): Promise<MarketInfo | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Request here
      // If file is found, resolve the promise with the file data, otherwise resolve with null

      // Mock example
      resolve(mockMarketData1);
    }, 2000); // Adjust the timeout as needed
  });
};
