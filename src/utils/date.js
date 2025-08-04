export function formatDateToLongString(time) {
    const date = new Date(time)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }


  export function getTimeProgressPercentage(startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate)
    const now = new Date();
  
    // Ensure "now" is within the range
    if (now <= startDate) return 0;
    if (now >= endDate) return 100;
  
    const totalDuration = endDate - startDate; // in milliseconds
    const elapsed = now - startDate;
  
    const percentage = (elapsed / totalDuration) * 100;
    return Math.floor(percentage);
  }
  

  export function isSameDay(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
  
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }
  