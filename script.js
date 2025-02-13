document.getElementById("no-btn").addEventListener("mouseover", function() {
    const btn = this;
    const maxX = window.innerWidth - btn.offsetWidth - 20; // Ensure button stays within screen
    const maxY = window.innerHeight - btn.offsetHeight - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
  });