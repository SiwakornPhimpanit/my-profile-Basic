// ===========================
// State
// ===========================
let isDark = false;

// ===========================
// Element References
// ===========================
const toggleButton = document.querySelector("#theme-toggle");
const footer = document.querySelector("#card-footer");
const nameInput = document.querySelector("#name-input");
const cardName = document.querySelector("#card-name");

// ===========================
// Event: สลับธีม
// ===========================
toggleButton.addEventListener("click", () => {
  isDark = !isDark;

  document.body.classList.toggle("dark", isDark);

  toggleButton.textContent = isDark
    ? "☀️ โหมดกลางวัน"
    : "🌙 โหมดกลางคืน";
});

// ===========================
// Footer: แสดงปีอัตโนมัติ
// ===========================
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} — Deploy ด้วย GitHub Pages 🚀`;

// ===========================
// เปลี่ยนชื่อจาก Text Input
// ===========================
nameInput.addEventListener("input", () => {
  const newName = nameInput.value.trim();

  if (newName === "") {
    cardName.textContent = "Siwakorn Phimpanit";
  } else {
    cardName.textContent = newName;
  }
});