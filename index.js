const btn = document.getElementById("addbtn");
const lists = document.getElementById("lists");

btn.addEventListener("click", async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await res.json();
  console.log(photos);
});
