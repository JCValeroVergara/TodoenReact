import React from 'react';
import { TodoIcon } from '.';

function IconDelete({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      color="gray"
      onClick={onDelete}
    />
  )
}

export { IconDelete };