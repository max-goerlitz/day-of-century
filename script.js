function calculateAndDisplayTable(selectedDate) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    const startDate = new Date(selectedDate);
    startDate.setDate(startDate.getDate() - 50);

    for (let i = -50; i <= 50; i++) {
        const currentDate = new Date(selectedDate);
        currentDate.setDate(currentDate.getDate() + i);
        
        // Calculate the required data for currentDate
        const data = getDayData(currentDate);

        // Create a new row and cells for the data
        const row = tableBody.insertRow();
        Object.values(data).forEach(text => {
            const cell = row.insertCell();
            cell.textContent = text;
        });
    }
}

function getDayData(date) {
    // Your logic here to calculate the day of the decade, century, etc.
    // This is a simplified placeholder logic
    const dayOfDecade = "Calculate"; // Placeholder, replace with actual calculation
    const dayOfCentury = "Calculate"; // Placeholder, replace with actual calculation
    const daysInDecadeLeft = "Calculate"; // Placeholder
    const daysInCenturyLeft = "Calculate"; // Placeholder
    const percentageOfDecadePassed = "Calculate"; // Placeholder
    const percentageOfCenturyPassed = "Calculate"; // Placeholder

    return {
        date: date.toISOString().split('T')[0], // Formats the date as YYYY-MM-DD
        dayOfDecade,
        dayOfCentury,
        daysInDecadeLeft,
        daysInCenturyLeft,
        percentageOfDecadePassed,
        percentageOfCenturyPassed
    };
}

function displayTable() {
    const selectedDate = document.getElementById("inputDate").value;
    if (selectedDate) {
        calculateAndDisplayTable(selectedDate);
    } else {
        alert("Please select a date.");
    }
}
