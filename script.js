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
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getYear();
      year = String(year).slice(-2);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      if (day < 10){
        day = '0' + day;
      }
      if (month < 10){
        month = '0' + month;
      }
      if (hours < 10){
        hours = '0' + hours;
      }
      if (minutes < 10){
        minutes = '0' + minutes;
      }
      alert(`дата ${day}.${month}.${year} ${hours}:${minutes}`)
    }
  }
  //formatDate(new Date(2023, 3, 15, 16, 45));