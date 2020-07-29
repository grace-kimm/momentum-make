// 변수 2개 선언
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1"); //clockContainer에서 h1 태그를 가진 자식 1개를 꺼낸다.

function getTime() {
  const date = new Date(); // Date : Object
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
