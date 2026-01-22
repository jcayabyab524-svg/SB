const card = document.getElementById("card");
const greetBox = document.getElementById("greetBox");

document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("receipt");
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB

  fileInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file && file.size > MAX_SIZE) {
      alert("File size must not exceed 5MB.");
      this.value = ""; // Clear selected file
    }
  });
});


document.getElementById("signupForm").addEventListener("submit", async e => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const res = await fetch("http://localhost:3000/register", {
    method: "POST",
    body: formData
  });

  const data = await res.json();

  if (data.success) {
    card.classList.remove('show');
    card.classList.add('hide');

    setTimeout(() => {
      greetBox.classList.add('show');
    }, 800); // wait for white box animation

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

  } else {
    alert(data.error);
  }

});



