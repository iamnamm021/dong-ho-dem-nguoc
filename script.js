let endDate = new Date("15 August 2024 12:00:00 UTC+07:00").getTime();
console.log(endDate);
let check = setInterval(function(){
	let now = new Date().getTime();
	console.log(now);
	let distance = endDate - now;
	console.log(distance);
	let day = Math.floor(distance / (24*60*60*1000));
	let hour = Math.floor((distance % (24*60*60*1000)) / (60*60*1000));
	let minute = Math.floor((distance % (60*60*1000)) / (60*1000));
	let second = Math.floor((distance % (60*1000)) / 1000);
	console.log(second);
	


	document.getElementById('day').innerText = day;
	document.getElementById('hour').innerText = hour;
	document.getElementById('minute').innerText = minute;
	document.getElementById('second').innerText = second;
	if(distance <= 0){
		clearInterval(check);
	}
}, 1000);


