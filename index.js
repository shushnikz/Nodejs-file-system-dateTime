const watch=require('./watches/digitalwatches');


//Use setInterval Function to call the indianWatch function every second
setInterval(watch.dateTime,1000);