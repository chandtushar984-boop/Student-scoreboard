import { useState } from 'react'
import './AddStudentForm.css'

function AddStudentForm({ onAdd }) {
  const [name, setName]   = useState('')
  const [score, setScore] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    /* Validate name */
    const trimmedName = name.trim()
    if (!trimmedName) {
      setError('Please enter a student name.')
      return
    }

    /* Validate score */
    const parsedScore = parseInt(score, 10)
    if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) {
      setError('Score must be a whole number between 0 and 100.')
      return
    }

    /* All good — pass up and clear form */
    onAdd(trimmedName, parsedScore)
    setName('')
    setScore('')
    setError('')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  const isDisabled = !name.trim() || score === ''

  return (
    <div className="form-card">
      <h2 className="form-title">Add a new student</h2>

      <div className="form-row">
        {/* Name field */}
        <div className="form-field">
          <label htmlFor="student-name" className="form-label">
            Student name
          </label>
          <input
            id="student-name"
            type="text"
            className="form-input"
            placeholder="e.g. Aisha Khan"
            value={name}
            onChange={(e) => { setName(e.target.value); setError('') }}
            onKeyDown={handleKey}
          />
        </div>

        {/* Score field */}
        <div className="form-field form-field--score">
          <label htmlFor="student-score" className="form-label">
            Score (0 – 100)
          </label>
          <input
            id="student-score"
            type="number"
            className="form-input"
            placeholder="e.g. 72"
            min="0"
            max="100"
            value={score}
            onChange={(e) => { setScore(e.target.value); setError('') }}
            onKeyDown={handleKey}
          />
        </div>

        {/* Submit button */}
        <button
          className="btn-add"
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          + Add student
        </button>
      </div>

      {/* Inline validation error */}
      {error && <p className="form-error">{error}</p>}
    </div>
  )
}

export default AddStudentForm
