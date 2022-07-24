import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Workouts(props) {
 const workouts = props.workouts.filter(x => 
  x.Days === 1
  )

 console.log(workouts)
 const workoutCards = workouts.map((eachWorkout) => {
  return <Col xs={12} md={4} sm={6} lg={4} className='p-2'><Card>
  <Card.Img alt='Food' variant='bottom' src={eachWorkout.Img} />
  <Card.Body>
      <Card.Title>{eachWorkout.Title}</Card.Title>
      <Card.Text style={{ height: '50px' }}>{eachWorkout.Text}</Card.Text>
      <Button variant="primary" disabled>Go To Program</Button>
  </Card.Body>
</Card> 
</Col>
 })


 return (
  <div>
       <h1>Workout Programs!</h1>
       <Container>
         <Row>
              {workoutCards}
         </Row>
       </Container>
  </div>
 )       
}