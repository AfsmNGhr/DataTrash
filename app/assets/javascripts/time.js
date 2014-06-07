function clock(){
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();
	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
	//currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
	$('#hour_min').text(currentHours + ':' + currentMinutes);
	//$('#sec').css({"font-size":"9px", "vertical-align":"text-top"}).text(currentSeconds);
}

//создадим массив дней недели
var days = ['Вск','Пнд','Втр','Срд','Чтв','Птн','Сбт']
//['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//и массив месяцев по-русски
var months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
			  'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

$(document).ready(function() {
   var currentTime = new Date();//Получаем текущую дату
   var currentDay = days[currentTime.getDay()];//Вытаскваем из нашего массива текущий день недели
   var currentDate = currentTime.getDate();//День
   var currentMonth = months[currentTime.getMonth()];//Месяц
   var currentYear = currentTime.getFullYear();//Год
//В элемент с id=date выводим текущую дату в красивом формате
   $('#date').text(currentDay + ', ' + currentDate + ' ' + currentMonth); //+ ' ' + currentYear);
   clock(); //вызываем функцию времени
   window.setInterval(clock, 1000); //вызываем функцию clock() каждую секунду
});
