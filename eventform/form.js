const form = document.querySelector("#form");
const typeSelect = document.querySelector("#type");
const studentIdField = document.querySelector("#studentId");
const eventCodeField = document.querySelector("#code");
const output = document.querySelector("#output");

function updateConditionalFields() {
  const isStudent = typeSelect.value === "one";
  const isGuest = typeSelect.value === "many";

  studentIdField.closest(".field").classList.toggle("hidden", !isStudent);
  eventCodeField.closest(".field").classList.toggle("hidden", !isGuest);

  studentIdField.required = isStudent;
  eventCodeField.required = isGuest;

  if (!isStudent) {
    studentIdField.value = "";
  }

  if (!isGuest) {
    eventCodeField.value = "";
  }
}

typeSelect.addEventListener("change", updateConditionalFields);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const eventDate = document.querySelector("#eventDate").value;
  const ticketType = typeSelect.options[typeSelect.selectedIndex].text;

  output.innerHTML = `
    <h2>Ticket Preferences Submitted</h2>
    <p>Thank you, ${firstName} ${lastName}!</p>
    <p>We will send your ${ticketType.toLowerCase()} ticket information to
      <strong>${email}</strong>.</p>
    <p>Your event date is <strong>${eventDate}</strong>.</p>
  `;

  form.reset();
  updateConditionalFields();
});

updateConditionalFields();
