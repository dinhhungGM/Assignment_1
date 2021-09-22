console.log("Hello world");
const addTodo = (e) => {
  let inputTodo = $("#input-todo");
  console.log(inputTodo);
  $("#todo-item-list").append(`<div class="item"> ${inputTodo.val()}  </div>`);
  inputTodo.val("");
  
};
