import { useState } from 'react'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'
import './App.css'

const initialStudents = [
  { id: 1, name: 'Rohan',  score: 78 },
  { id: 2, name: 'Rahul',   score: 35 },
  { id: 3, name: 'Mohit',  score: 92 },
 
]

function App() {
  const [students, setStudents] = useState(initialStudents)

  
  const handleScoreChange = (id, newScore) => {
    setStudents(prev =>
      prev.map(s => (s.id === id ? { ...s, score: newScore } : s))
    )
  }

  
  const handleAddStudent = (name, score) => {
    const newStudent = { id: Date.now(), name, score }
    setStudents(prev => [...prev, newStudent])
  }

  
  const passing = students.filter(s => s.score >= 40).length
  const failing  = students.length - passing
  const avg = students.length
    ? Math.round(students.reduce((sum, s) => sum + s.score, 0) / students.length)
    : 0
  const top = students.length ? Math.max(...students.map(s => s.score)) : '—'

  return (
    <div className="app-wrapper">
      
      <Header total={students.length} passing={passing} failing={failing} />

      
      <div className="stats-grid">
        <StatCard label="Total students" value={students.length} />
        <StatCard label="Passing (≥ 40)"  value={passing}  color="pass" />
        <StatCard label="Failing (< 40)"   value={failing}   color="fail" />
        <StatCard label="Class average"    value={avg} />
        <StatCard label="Top score"        value={top} />
      </div>

      
      <StudentTable students={students} onScoreChange={handleScoreChange} />

     
      <AddStudentForm onAdd={handleAddStudent} />
    </div>
  )
}

function StatCard({ label, value, color }) {
  return (
    <div className="stat-card">
      <p className="stat-label">{label}</p>
      <p className={`stat-value ${color || ''}`}>{value}</p>
    </div>
  )
}

export default App
