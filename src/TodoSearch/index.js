import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContex'

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  


  return (
    <input
      placeholder="Cortar Cebolla"
      className='TodoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)
      }}
    />
  )
}

export { TodoSearch }