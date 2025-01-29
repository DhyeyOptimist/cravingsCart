function incrementVisitCount() {
    // Try to get the current count from localStorage
    let visitCount = localStorage.getItem('visitCount');
    
    // If it doesn't exist, initialize it to 500
    if (!visitCount) {
        visitCount = 500;
    }
    
    // Increment the count
    visitCount = Number(visitCount) + 1;
    
    // Save the new count
    localStorage.setItem('visitCount', visitCount);
    
    // Update the display
    const countDisplay = document.getElementById('visitCount');
    if (countDisplay) {
        countDisplay.textContent = visitCount;
    }
}

// Run when the page loads
document.addEventListener('DOMContentLoaded', incrementVisitCount); 