import StudentRow from './StudentRow'
import './StudentTable.css'

function StudentTable({ students, onScoreChange }) {
  if (students.length === 0) {
    return (
      <div className="table-wrap empty-state">
        <p>No students yet — add one using the form below.</p>
      </div>
    )
  }

  return (
    <div className="table-wrap">
      <table className="student-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Student name</th>
            <th>Edit score</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={student.id}
              student={student}
              index={index}
              onScoreChange={onScoreChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable
