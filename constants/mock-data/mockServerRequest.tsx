//mock server response for testing purpose can be removed once we connec to peer
export const fetchFromServer = (fileName: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({success: true});
    }, 2000); // Adjust the timeout as needed
  });
};