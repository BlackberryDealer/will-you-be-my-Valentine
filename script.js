// Create a function that moves the "No" button
function moveNoButton(btn) {
  // Change to fixed so its offsets are relative to the viewport
  btn.style.position = 'fixed';

  const maxX = window.innerWidth - btn.offsetWidth - 20;
  const maxY = window.innerHeight - btn.offsetHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
}

// For desktop: mouseover event
document.getElementById("no-btn").addEventListener("mouseover", function() {
  moveNoButton(this);
});

// For mobile: touchstart event
document.getElementById("no-btn").addEventListener("touchstart", function(e) {
  e.preventDefault(); // Prevent default behavior (like triggering click)
  moveNoButton(this);
});


// When the Yes button is clicked, show the modal
document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
  });
  
  // When the close button is clicked, hide the modal
  document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });
  
  // Also hide the modal if the user clicks outside the modal content
  window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });