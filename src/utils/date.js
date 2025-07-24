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
  
    console.log({totalDuration , elapsed , now , startDate , endDate})
    const percentage = (elapsed / totalDuration) * 100;
    return Math.floor(percentage);
  }
  