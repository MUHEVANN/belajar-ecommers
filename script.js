const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const tutup = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (tutup) {
  tutup.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
