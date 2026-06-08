function updateWatch() {
    const now = new Date();
    
    // Time
    document.getElementById('time').textContent = now.toLocaleTimeString();
    
    // Date & Greeting
    const dateOptions = { weekday: 'long', month: 'short', day: 'numeric' };
    const dateStr = now.toLocaleDateString(undefined, dateOptions);
    const hours = now.getHours();
    const greeting = hours < 12 ? "Good Morning" : hours < 18 ? "Good Afternoon" : "Good Evening";
    
    document.getElementById('date').innerHTML = `${dateStr}<br><b>${greeting}</b>`;
}

setInterval(updateWatch, 1000);
updateWatch();
