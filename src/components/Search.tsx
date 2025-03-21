import { useState } from 'react'
import MEDICALRECORDS from 'utils/MEDICALRECORDS'

function Search({ setRecord, setId, id }) {
  const patients = MEDICALRECORDS.map((record) => ({
    id: record.id,
    name: record.data[0].userName
  }))
  const [selectedId, setSelectedId] = useState('0')

  const handleSelectChange = (event) => {
    setSelectedId(event.target.value)
  }

  const handleSubmit = () => {
    if (selectedId === '0') {
      alert('Please select a patient name')
      return
    }
    setId(selectedId)
    setRecord(MEDICALRECORDS.find((record) => record.id === selectedId))
  }

  return (
    <div className="">
      <select
        data-testid="patient-name"
        defaultValue={id || '0'}
        className="bg-blue-300 p-2"
        onChange={handleSelectChange}
      >
        <option value="0" disabled>
          Select Patient
        </option>
        {patients.map((patient) => {
          return (
            <option key={patient.id} value={patient.id}>
              {patient.name}
            </option>
          )
        })}
      </select>

      <button
        type="submit"
        className="border bg-blue-500 p-2"
        data-testid="show"
        onClick={handleSubmit}
      >
        Show
      </button>
    </div>
  )
}

export default Search
