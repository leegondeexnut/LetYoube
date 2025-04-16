console.log("Welcome to LetYoube"); 
// filepath: c:\Users\trekk\OneDrive\Desktop\shit\script.js

function handlePlanClick(planName) {
    const userChoice = confirm(
        `You selected "${planName}".\nDo you want to sign in to save your progress?`
    );

    if (userChoice) {
        // Redirect to sign-in page (you can create this later)
        alert("Redirecting to sign-in page...");
        // Example: window.location.href = 'signin.html';
    } else {
        // Continue as a guest
        alert("Continuing as a guest...");
        saveGuestData(planName);
    }
}

function saveGuestData(planName) {
    // Save the selected plan to localStorage for guests
    localStorage.setItem("selectedPlan", planName);
    alert(`Your selected plan "${planName}" has been saved.`);
}

.trip-plan {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
    text-align: center;
}

.trip-plan h3 {
    margin-bottom: 0.5rem;
    color: #c11717;
}

.trip-plan p {
    margin-bottom: 1rem;
    color: #333;
}

.trip-plan button {
    background-color: #c11717;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.trip-plan button:hover {
    background-color: #a10e0e;
}