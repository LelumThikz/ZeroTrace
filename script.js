const BOT_TOKEN = '[BOT TOKEN HERE]';
const CHAT_ID = '[CHAT ID HERE]';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const inputs = document.querySelectorAll("[data-form-input]");
  const submitBtn = document.querySelector("[data-form-btn]");

  // Enable button when all inputs are filled
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      const allFilled = Array.from(inputs).every(i => i.value.trim() !== "");
      submitBtn.disabled = !allFilled;
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullname = form.fullname.value.trim();
    const message = form.message.value.trim();

    const textMessage = `
*${fullname}*

${message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: textMessage,
          parse_mode: "Markdown"
        })
      });

      if (response.ok) {
document.getElementById("submissionResult").innerText = "Message sent successfully!";
        form.reset();
        submitBtn.disabled = true;
      } else {
        document.getElementById("submissionResult").innerText = "Failed to send message. Please try again.";
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    }
  });
});
