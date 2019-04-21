// wrapping clock in setInterval
setInterval(() => {
    let date = new Date();  
  
    // time variables
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    //date variable
    let months = ['jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let day = date.getDate();
    let month = months[date.getUTCMonth()];
    let year = date.getFullYear();


    // DOM Cache
    let hr_span = document.querySelector('#hr');
    let min_span = document.querySelector('#min');
    let sec_span = document.querySelector('#sec');
    let date_span = document.querySelector('#date');

    if (hr < 10) {
        hr = '0' + hr;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    hr_span.innerHTML = hr;
    min_span.innerHTML = ':' + min;
    sec_span.innerHTML = ':' + sec;
    date_span.innerHTML = `${day} - ${month} - ${year}`;

}, 300);
