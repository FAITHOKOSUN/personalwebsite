function updateTimeAndDay() {
    const utcTimeElement = document.getElementById('utcTime');
    const currentDayElement = document.getElementById('currentDay');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4]; 
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[now.getUTCDay()]; 

    utcTimeElement.textContent = utcTime;
    currentDayElement.textContent = currentDay;
}

setInterval(updateTimeAndDay, 1000); 
updateTimeAndDay();
