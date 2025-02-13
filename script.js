document.getElementById("no-btn").addEventListener("mouseover", function() {
    const x = Math.random() * window.innerWidth * 0.6;
    const y = Math.random() * window.innerHeight * 0.6;
    this.style.transform = `translate(${x}px, ${y}px)`;
});
