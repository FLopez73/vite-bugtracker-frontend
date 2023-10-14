import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [BugDescription, setBugDescription] = useState ('')
  const [newBugPriority, setNewBugPriority] = useState ('')
  const [newAsignee, setNewAssignee] = useState ('')
  const [bugList, setBugList] = useState ([])

  const addBug = () => {}
  const deleteBug = () => {}

  return (
    <>
      <div>
        <h1>Bug Tracker</h1>

        <form onSubmit={addBug}>
          <label>
            Bug description
          </label>
          <input type="text" id="BugDescription" value={BugDescription} onChange={event => setBugDescription(event.target.value)}/>
        </form>
      </div>
    </>
  )
}

export default App
