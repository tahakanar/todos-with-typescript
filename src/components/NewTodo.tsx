import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enterdeText = todoTextInputRef.current!.value;

    if (enterdeText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enterdeText);
  };

  return (
    <form onSubmit={submitHandler} className='form'>
      <label htmlFor='text'>Todo Text</label>
      <input ref={todoTextInputRef} type='text' id='text' />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
