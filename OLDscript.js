function calculate() {
    const input = document.getElementById("dateInput").value;
    if (!input) {
        alert("Please enter a date in the format YYYY-MM-DD.");
        return;
    }
    const inputDate = new Date(input);

    const startOfDecade = new Date(inputDate.getFullYear() - (inputDate.getFullYear() % 10), 0, 1);
    const startOfCentury = new Date(inputDate.getFullYear() - (inputDate.getFullYear() % 100), 0, 1);
    const endOfDecade = new Date(startOfDecade.getFullYear() + 10, 0, 1);
    const endOfCentury = new Date(startOfCentury.getFullYear() + 100, 0, 1);

    const daysInDecade = (endOfDecade - startOfDecade) / (1000 * 60 * 60 * 24);
    const daysInCentury = (endOfCentury - startOfCentury) / (1000 * 60 * 60 * 24);
    const dayOfDecade = Math.floor((inputDate - startOfDecade) / (1000 * 60 * 60 * 24)) + 1;
    const dayOfCentury = Math.floor((inputDate - startOfCentury) / (1000 * 60 * 60 * 24)) + 1;

    const remainingDaysDecade = daysInDecade - dayOfDecade;
    const remainingDaysCentury = daysInCentury - dayOfCentury;
    const percentageDecade = (dayOfDecade / daysInDecade) * 100;
    const percentageCentury = (dayOfCentury / daysInCentury) * 100;

    const resultsElement = document.getElementById("results");
    resultsElement.innerHTML = `
        <p>Date: ${input}</p>
        <p>Day number of the decade: ${dayOfDecade}, Days remaining in the decade: ${remainingDaysDecade}, Percentage of the decade that has passed: ${percentageDecade.toFixed(2)}%</p>
        <p>Day number of the century: ${dayOfCentury}, Days remaining in the century: ${remainingDaysCentury}, Percentage of the century that has passed: ${percentageCentury.toFixed(2)}%</p>
    `;
}
