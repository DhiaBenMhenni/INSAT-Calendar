const countdown = () => {
  const countDate= new Date('september 1, 2021, 00:08:00').getTime();
  const now= new Date().getTime();
  // setting time rules
  const gap= countDate - now;
  const second= 1000;
  const minute= second*60;
  const hour= minute*60;
  const day= hour*24;
  //playing the rules
  const timeDay= Math.floor(gap/day);
  const timeHour=Math.floor((gap % day)/ hour);
  const timeMinute=Math.floor((gap % hour)/ minute);
  const timeSecond=Math.floor((gap % minute)/ second);
  //applying the rules 
  document.querySelector('.day').innerText= timeDay;
  document.querySelector('.hour').innerText= timeHour;
  document.querySelector('.minute').innerText= timeMinute;
  document.querySelector('.second').innerText= timeSecond;
};
setInterval(countdown,1000);