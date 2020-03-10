const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date(); // 현재 date를 불러와서 저장
  const hours = date.getHours(); // date에서 시간을 가져온다.
  const minutes = date.getMinutes(); // date에서 분을 가져온다.
  const seconds = date.getSeconds(); // date에서 초를 가져온다.
  
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  // 시간 : 분 : 초 형식으로 화면에 띄운다. seconds는 10보다 작을 경우 앞에 0을 붙인다. (ternary operator)
}

function init() {
  getTime(); // 실행 할 때 getTime() 함수를 실행한다.
  setInterval(getTime, 1000); // 1초마다 date의 시간을 바꾼다.
}

init();
