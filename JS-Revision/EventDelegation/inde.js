document.querySelector("#container").addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName === "LI") {
    console.log(e.target.id);
    window.location.href = "/" + e.target.id;
  }
});
