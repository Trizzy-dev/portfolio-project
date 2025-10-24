console.log("Script loaded!");
console.log(document.getElementById("js-button"));


// ===== Smooth Scroll for "View Projects" Button =====
document.getElementById("view-projects-btn").addEventListener("click", function() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  console.log(document.getElementById("view-projects-btn"))
});

// ===== Dynamic Greeting by Time of Day =====
const heroHeading = document.querySelector(".hero-content h2");
const currentHour = new Date().getHours();

let greeting;
if (currentHour < 12) {
  greeting = "Good Morning";
} else if (currentHour < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

// Replace the text dynamically
heroHeading.innerHTML = `${greeting}, I'm <span>Your Name</span>`;

// ===== Contact Form Save to Local Storage =====
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    // Create a message object
    const contactMessage = { name, email, message, date: new Date().toLocaleString() };

    // Get previous messages or create a new array
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];

    // Add the new message
    savedMessages.push(contactMessage);

    // Save back to localStorage
    localStorage.setItem("messages", JSON.stringify(savedMessages));

    alert("✅ Message saved locally! (Check console for data)");

    // Clear form fields
    form.reset();

    console.log("Saved Messages:", savedMessages);
  } else {
    alert("⚠ Please fill in all fields before submitting.");
  }
});

// ===== Scroll To Top Button =====
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

