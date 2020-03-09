const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", // User Local Storage
  SHOWING_CN = "showing"; // class Name = "showing"

function saveName(text) {
  localStorage.setItem(USER_LS, text); // 입력한 이름을 저장한다. local storage는 URL을 기반으로 동작
}

function handleSubmit(event) {
  event.preventDefault(); // Default Behavior를 막는다. (enter 치면 이름이 사라지는 event)
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  // currentUser가 있다면 그 사람의 이름을 색칠해보자!
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
