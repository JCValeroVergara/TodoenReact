import React from 'react';
import { TodoIcon } from '.';



function IconComplete({ completed, onComplete}) {
  return (
    <TodoIcon
      type="check"
      color={completed ? 'green' : 'gray'}
      onClick={onComplete}
    />
  )
}

export { IconComplete };