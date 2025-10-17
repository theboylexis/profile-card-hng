// --- Live time update ---
const timeEl = document.getElementById("time");
function updateTime() {
  timeEl.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000); // updates every second

// --- Avatar Upload & Preview ---
const uploadInput = document.getElementById("avatar-upload");
const avatarPreview = document.getElementById("avatar-preview");

uploadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      avatarPreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// --- Theme Toggle ---
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});
