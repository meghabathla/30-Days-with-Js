const getdata = async () => {
  await fetch("https://mydata/emails")
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
};
