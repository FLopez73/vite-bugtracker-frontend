import { useState } from 'react'
import './App.css'

function App() {
  const [bugDescription, setBugDescription] = useState ('')
  const [bugPriority, setBugPriority] = useState ('Medium')
  const [assignee, setAssignee] = useState ('')
  const [bugList, setBugList] = useState ([])

  const addBug = (event) => {
    event.preventDefault()
  }
  const deleteBug = () => {}

  return (
    <>
      <div>
        <h1>Bug Tracker</h1>

        <form onSubmit={addBug}>
          <label>
            Bug description
          </label>
          <input type="text" id="bugDescription" value={bugDescription} onChange={event => setBugDescription(event.target.value)}/>
          <label>
            Bug priority 
          </label>
          <select type="text" id="bugPriority" value={bugPriority} onChange={event => setBugPriority(event.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <label>
            Assignee
          </label>
          <input type="text" id="assignee" value={assignee} onChange={event => setAssignee(event.target.value)}/>
          <button type="submit">Add Bug</button>
        </form>
      </div>
    </>
  )
}

export default App
