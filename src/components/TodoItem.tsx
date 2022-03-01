const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li onClick={props.onRemoveTodo} className='item'>
      {props.text}
    </li>
  );
};

export default TodoItem;
