function myPromise(reason) {
  const result = new Promise((_, reject) => reject(reason));
  return result;
}

myPromise("An error accured").catch((error) => console.error(error));
