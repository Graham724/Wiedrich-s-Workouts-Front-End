//React features & hooks
import { useEffect, useState } from 'react'

//React-Bootstrap components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';



export default function Workouts(props) {
     const [workouts, setWorkouts] = useState([])
     
     useEffect(() => {
          const fetchData = async () => {
               console.log(process.env)
               const URL = `${process.env.REACT_APP_BACKEND_URL}/api/workouts`
               const response = await fetch(URL)
               const data = await response.json()
               setWorkouts(data)
          }
          fetchData()
     }, [])

     const display = workouts && workouts.map((eachWorkout) => {
          return (
             <Col xs={12} md={4} sm={6} lg={4} className='p-2'>
                  <CardGroup>
                  <Card>
                       <Card.Header>
                            <Card.Title>
                                 {eachWorkout.title}
                            </Card.Title>
                       </Card.Header>
                       <Card.Img alt='Workout' variant='bottom' src={eachWorkout.imgURL} />
                       <ListGroup className="list-group-flush">
                            <ListGroup.Item><span style={{fontWeight: 'bold'}}>Type: </span>{eachWorkout.type}</ListGroup.Item>
                            <ListGroup.Item><span style={{fontWeight: 'bold'}}>Estimated Time: </span>{eachWorkout.time} minutes</ListGroup.Item>
                       </ListGroup>
                       <Card.Body>
                            <Card.Text>
                            <span style={{fontWeight: 'bold'}}>Description: </span> {eachWorkout.desc}
                            </Card.Text>
                       </Card.Body>
                       <Card.Footer>
                            <Button variant="primary">Go To Program</Button>
                       </Card.Footer>
                  </Card>
                  </CardGroup> 
             </Col>
          )
     })

 return (
  <div>
       <h1>Workout Programs!</h1>
         <Row>
              {display}
         </Row>
       <Button className='create-buttons' variant="primary" style={{float: 'right', marginRight: '7px'}}>Create Workout</Button>
  </div>
 )       
}