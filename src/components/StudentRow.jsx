import { useState } from 'react'
import './StudentRow.css'

function StudentRow({ student, index, onScoreChange }) {
  const [draft, setDraft] = useState(String(student.score))

  const isPass = student.score >= 40

  const commitUpdate = () => {
    const val = parseInt(draft, 10)
    if (!isNaN(val) && val >= 0 && val <= 100) {
      onScoreChange(student.id, val)
    } else {
      setDraft(String(student.score))
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') commitUpdate()
    if (e.key === 'Escape') setDraft(String(student.score))
  }

  return (
    <tr className="student-row">
      <td>
        <span className="rank-badge">{index + 1}</span>
      </td>
      <td className="name-cell">{student.name}</td>
      <td>
        <div className="score-cell">
          <input
            className="score-input"
            type="number"
            min="0"
            max="100"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label={`Update score for ${student.name}`}
          />
          <button
            className="btn-update"
            onClick={commitUpdate}
            aria-label="Save score"
          >
            Update
          </button>
        </div>
      </td>
      <td className={`score-display ${isPass ? 'score-pass' : 'score-fail'}`}>
        {student.score}
      </td>
      <td>
        <span className={`status-badge ${isPass ? 'badge-pass' : 'badge-fail'}`}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>
    </tr>
  )
}

export default StudentRow
