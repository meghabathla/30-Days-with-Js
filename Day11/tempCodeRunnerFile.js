Promise.all([promise1, promise2])
//   .then((values) => console.log(values))
//   .catch((error) => console.log(error));

// Promise.allSettled([myPromise, mypromise]).then((result) => {
//   result.forEach((res) => {
//     if (res.status === "fulfilled") console.log("promise fulfilled");
//     else if (res.status === "rejected") console.log("promise rejected");
//   });
// });