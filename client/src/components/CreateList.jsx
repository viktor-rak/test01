import { useState } from 'react'

function CreateList({ list, setList }) {

  const [name, setName] = useState('')
  const [description, setDesc] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const defaultName = name.trim() === '' ? 'Untitled' : name
    const defaultDescription = description.trim() === '' ? 'No Desc.' : description
    setList([...list, { name: defaultName, description: defaultDescription }])
    setName('')
    setDesc('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={description} onChange={(e) => setDesc(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default CreateList
