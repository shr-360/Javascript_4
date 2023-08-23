// document.getElementById(`colorField`).addEventListener(`input`,function(){
//     let color = document.getElementById(`colorField`).value;
//     document.body.style.background = color;
// })

// document.getElementById(`rangeField`).addEventListener(`input`, function(){
//     let rangev = document.getElementById(`rangeField`).value;
//     document.getElementById(`rangeValue`).innerText = rangev;
// })

// document.getElementById(`watch`).addEventListener(`click`,function(){
//     let date = new Date();
//     document.getElementById(`watchShow`).innerText = date
// // })

// setInterval(function(){
// let date = new Date();
// document.getElementById(`watchShow`).innerText  = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
// // },1000)


// setInterval(function(){
//     let date = new Date();
//     document.getElementById(`mili`).innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${date.getMilliseconds()}`
// },1000)


setInterval (function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amPm = `pm`;

    amPm = hours >= 12 ? `pm` : `am`;
    hours = hours < 10 ? `0`+ hours:hours;
    hours = hours > 12 ? hours - 12:hours;
    minutes = minutes < 10 ? `0` + minutes:minutes
    seconds = seconds < 10 ? `0` + seconds:seconds
    document.getElementById(`mili`).innerText = `${hours} : ${minutes} : ${seconds} ${amPm}`
},1000)

