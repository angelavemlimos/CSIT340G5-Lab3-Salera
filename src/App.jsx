const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises} units
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div> 
  )
}

const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return <p><strong>Total number of units:  {total}</strong></p>
}

const Footer = (props) => {
  return (
    <footer>
      <hr />
      <p> {props.fullName} - {props.courseCode} - {props.section} </p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'BS Information Technology',
    parts: [
      {
        name: 'CSIT340 - Industry Elective 1',
        exercises: 3
      },
      {
        name: 'CSIT321 - Applications Development and Emerging Technologies',
        exercises: 3
      },
      {
        name: 'CSIT365 - Data Analytics 1',
        exercises: 3
      }
    ]
  }

  const studentName = 'Angela Vem D. Limos'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Header course = {course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer fullName={studentName} courseCode={courseCode} section={section} />
     </div> 
  )
}

export default App