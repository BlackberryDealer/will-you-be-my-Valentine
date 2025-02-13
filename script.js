document.getElementById("no-btn").addEventListener("mouseover", function() {
    const btn = this;
    const maxX = window.innerWidth - btn.offsetWidth - 20; // Make sure the button stays within bounds
    const maxY = window.innerHeight - btn.offsetHeight - 20; // Make sure the button stays within bounds
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
});
