document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); 
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach((section) => {
        section.classList.add("fade-in");
        observer.observe(section);
    });
});

/**/
const form = document.getElementById("contact-form");
  const messageDiv = document.getElementById("form-message");

  messageDiv.classList.add("fade-message");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showMessage("✅ Message sent successfully.", "text-success");
        form.reset();
      } else {
        showMessage("❌ There was an error sending the message.", "text-danger");
      }
    } catch (error) {
      showMessage("❌ Could not send the message.", "text-danger");
    }
  });

  function showMessage(text, className) {
    messageDiv.textContent = text;
    messageDiv.className = `mt-3 text-center fw-bold fade-message show ${className}`;

    setTimeout(() => {
      messageDiv.classList.remove("show");
      setTimeout(() => {
        messageDiv.textContent = "";
        messageDiv.className = "mt-3 text-center fw-bold fade-message";
      }, 500);
    }, 2000);
  }

  /* */
  document.addEventListener("DOMContentLoaded", function () {
    const text = "Hello, I'm Favio!";
    const speed = 100;
    let index = 0;
    const typingElement = document.querySelector(".typing-effect");

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
});