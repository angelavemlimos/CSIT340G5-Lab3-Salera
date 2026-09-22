const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div> 
  )
}

const Total = (props) => {
  return <p> Total number of units: {props.total} </p>
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
  const course = 'BS Information Technology'
  const part1 = {
    name: 'CSIT340 - Industry Elective 1',
    exercises: 3 
  }
  const part2 = {
    name: 'CSIT321 - Applications Development and Emerging Technologies',
    exercises: 3
  }
  const part3 = {
    name: 'CSIT365 - Data Analytics 1',
    exercises: 3
  }

  const studentName = 'Angela Vem Limos'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course = {course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      <Footer fullName={studentName} courseCode={courseCode} section={section} />
     </div> 
  )
}

export default App