const $ = document.querySelector.bind(document);

const app = (() => {
  const todos = ["1"];
  const todoItemList = $("#todo-item-list");
  const addButton = $("#add-button");
  const inputTodo = $("#input-todo");
  // console.log($);
  console.log(addButton);
  return {
    add(todo) {
      todos.push(todo);
    },
    update(newTodo) {},
    delete(index) {
      todos.splice(index, 1);
    },
    render() {
      todoItemList.innerHTML = todos
        .map(
          (todo, index) =>
            `<div class="item"> 
                <div class="item-children">  
                  ${todo} 
                  <div > 
                  <img class="update-todo-item" data-index=${index} src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-edit-mintab-for-ios-becris-lineal-becris.png"/> 
                  <img class="delete-todo-item" data-index=${index} src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-delete-ecommerce-flatart-icons-outline-flatarticons.png"/>  
                  </div>
                  </div>
                </div>
                </div>`
        )
        .join("");
    },
    init() {
      console.log(addButton);
      addButton.addEventListener("click", () => {
        const todo = inputTodo.value;
        if (todo.trim() === "") {
          alert("Please enter a todo value");
          return;
        }
        console.log("ass");
        this.add(todo);
        inputTodo.value = "";
        inputTodo.focus();
        this.render();
      });
      todoItemList.addEventListener("click", (e) => {
        const updateTodoBtn = e.target.closest(".update-todo-item");
        const deleteTodoBtn = e.target.closest(".delete-todo-item");
        if(deleteTodoBtn){
          const index = deleteTodoBtn.dataset.index;
          this.delete(index)
          
        }

        if(updateTodoBtn){

        }
        this.render();
      })
      this.render();
    },
  };
})();

app.init();
