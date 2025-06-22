function downloadForm() {
  const firstname = document.getElementById("firstname").value;
  const secondname = document.getElementById("secondname").value;
  const gmail = document.getElementById("gmail").value;
  const dob = document.getElementById("dob").value;
  const phone = document.getElementById("phonenumber").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not specified";

  const content = `
    First Name: ${firstname}
    Second Name: ${secondname}
    Gmail: ${gmail}
    Date of Birth: ${dob}
    Phone Number: ${phone}
    Gender: ${gender}
  `;

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "submitted_form.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
