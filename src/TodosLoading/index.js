import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className='LoadingTodo-container'>
      <span className='LoadingTodo-IconComplete'></span>
      <p className='LoadingTodo-text'>Cargando TODOs...</p>
      <span className='LoadingTodo-IconDelete'></span>
    </div>
  )
}

export { TodosLoading }