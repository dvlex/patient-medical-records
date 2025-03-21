import Records from './Records'
import Search from './Search'
import { useState } from 'react'

function App() {
  const [record, setRecord] = useState()
  const [id, setId] = useState()

  return (
    <div className="App">
      <div className="content">
        <Search id={id} setId={setId} setRecord={setRecord} />
        <Records record={record} setRecord={setRecord} setId={setId} />
      </div>
    </div>
  )
}

export default App
