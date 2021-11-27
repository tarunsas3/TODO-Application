import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoList, todoList } from "../redux/apiCalls";
import axios from "axios";

function TodoList() {
  // const product = useSelector((state) =>
  //   state.product.products.find((product) => product._id === productId)
  // );

  const [itemId, setItemId] = useState("");
  const item = useSelector((state) =>
    state.item.items.find((item) => item._id === itemId)
  );
  console.log(item);

  const handleClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      window.localStorage.clear();
    }, 1000);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    todoList(dispatch, newTodos[0]); //ADDING TODO
    console.log(newTodos);
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setItemId(id);
    deleteTodoList(dispatch, id); //DELETING TODO
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/item/items");
        setTodos(res.data);
      } catch (err) {}
    };
    getItems();
  }, []);

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <button className="todo-button logout-button" onClick={handleClick}>
        Logout
      </button>
    </>
  );
}

export default TodoList;
