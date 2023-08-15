
import { IconComplete } from '../TodoIcon/IconComplete';
import { IconDelete } from '../TodoIcon/IconDelete';
import './TodoItem.css'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <IconComplete
        completed={props.completed}
        onComplete={props.onComplete}
        onUncomplete={props.onUncomplete}
      />

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <IconDelete onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };