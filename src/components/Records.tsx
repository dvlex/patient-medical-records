import MEDICALRECORDS from 'utils/MEDICALRECORDS'

function Records({ record, setRecord, setId }) {
  const timeStampToDate = (timestamp) => {
    const date = new Date(timestamp)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
  }

  const handleNext = () => {
    const currentIndex = MEDICALRECORDS.findIndex((x) => x.id === record.id)
    if (currentIndex < MEDICALRECORDS.length - 1) {
      setRecord(MEDICALRECORDS[currentIndex + 1])
      setId(MEDICALRECORDS[currentIndex + 1].id)
    } else {
      setRecord(MEDICALRECORDS[0])
      setId(MEDICALRECORDS[0].id)
    }
  }

  return (
    <>
      {record && (
        <div className="patient-profile-container" id="profile-view">
          <div className="layout-row justify-content-center">
            <div
              id="patient-profile"
              data-testid="patient-profile"
              className="mx-auto"
            >
              <h4 id="patient-name">{record?.data[0].userName}</h4>
              <h5 id="patient-dob">DOB: {record?.data[0].userDob}</h5>
              <h5 id="patient-height">Height: {record?.data[0].meta.height}</h5>
            </div>
            <button
              className="mr-10 mt-10 bg-blue-700 p-3"
              data-testid="next-btn"
              onClick={handleNext}
            >
              Next
            </button>
          </div>

          <table id="patient-records-table">
            <thead id="table-header">
              <tr>
                <th>SL</th>
                <th>Date</th>
                <th>Diagnosis</th>
                <th>Weight</th>
                <th>Doctor</th>
              </tr>
            </thead>
            <tbody id="table-body" data-testid="patient-table">
              {record?.data.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{timeStampToDate(data.timestamp)}</td>
                  <td>{data.diagnosis.name}</td>
                  <td>{data.meta.weight}</td>
                  <td>{data.doctor.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

export default Records
