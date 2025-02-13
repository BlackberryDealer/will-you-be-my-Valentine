document.getElementById("no-btn").addEventListener("mouseover", function() {
    const btn = this;
    // Change to fixed so its offsets are relative to the viewport
    btn.style.position = 'fixed';
  
    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
  });
  