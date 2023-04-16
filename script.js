function formatDate(date){
  let difference = new Date() - date;
  let sec = Math.round(difference / 1000);
   let min = Math.round(difference / 60000);
  if (difference < 1000) 
  {
    alert('Прямо сейчас');
  }
  else if (sec < 60) {
    alert(`${sec} сек. назад`);
  }
  else if (min < 60) {
    alert(`${min} мин. назад`);
  }
  else {
  let formatter = new Intl.DateTimeFormat("ru", {
  year: "2-digit",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
let formatter2 = formatter.format(date);
    alert(`дата: ${formatter2}`)
  }
}
//formatDate(new Date(2023, 3, 15, 16, 45));