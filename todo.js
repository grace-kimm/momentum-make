// html 에서 사용한 변수를 불러오기
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

// const > let으로 바꾼 이유 : cleanToDos로 toDos를 바꿔줄 것이기 때문
let toDos = [];

function saveToDos() {
  // JSON.stringify : string 형태로 바꿔준다.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // X 클릭 시 해당 row가 삭제 된다.
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  // 새로고침 해도 삭제된 상태가 유지 된다.
  // toDos.filter() : array 요소의 각각에 대해 실행하고, true인 item을 가지고 새로운 array를 만든다.
  const cleanToDos = toDos.filter(function(toDo) {
    // parseInt : int를 string으로 바꾼다.
    return toDo.id !== parseInt(li, id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function paintToDo(text) {
  // 변수를 여기에서 직접 만들고 싶을 때
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;

  // parent element에 요소를 덧붙인다.
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  };

  // array에 element를 넣어준다.
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    // forEach : 배열 내 각각의 요소에 대해 함수를 실행한다.
    // funtion(toDo) {paintToDo(toDo.text);} : 코드 안에서 함수를 직접 만드는 것
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
