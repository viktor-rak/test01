import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initList = [
  {
    name: "name",
    description: "description"
  },
  {
    name: "item_1",
    description: "item_desc"
  }
]

function App() {
  const [list, setList] = useState(initList)
  
  

  return (
    <>
      <h1>To Do List</h1>
      <Form list={list} setList={setList}/>
      <ul>
        {list.map((item, index)=>{
          return (
            <li key={index}>{item.name} {item.description}</li>
          )
          

        })}
      </ul>
    </>
  )
}

function Form({list, setList}) {
  
  const [name, setName] = useState('')
  const [description, setDesc] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setList([...list, {name, description}])
    setName('')
    setDesc('')
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
        </label>
        <label>
        Description:
        <input type="text" name="description" value={description} onChange={(e)=>setDesc(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  )

}

export default App
