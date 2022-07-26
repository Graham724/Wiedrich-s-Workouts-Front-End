import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Workouts(props) {
     const workouts = props.workouts.map((eachWorkout) => {
          return (
             <Col xs={12} md={4} sm={6} lg={4} className='p-2'>
                  <CardGroup>
                  <Card>
                       <Card.Header>
                            <Card.Title>
                                 {eachWorkout.Title}
                            </Card.Title>
                       </Card.Header>
                       <Card.Img alt='Workout' variant='bottom' src={eachWorkout.Img} />
                       <ListGroup className="list-group-flush">
                            <ListGroup.Item><span style={{fontWeight: 'bold'}}>Type: </span>{eachWorkout.Type}</ListGroup.Item>
                            <ListGroup.Item><span style={{fontWeight: 'bold'}}>Estimated Time: </span>{eachWorkout.Time} minutes</ListGroup.Item>
                       </ListGroup>
                       <Card.Body>
                            <Card.Text>
                            <span style={{fontWeight: 'bold'}}>Description: </span> {eachWorkout.Description}
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
              {workouts}
         </Row>
       <Button className='create-buttons' variant="primary" style={{float: 'right', marginRight: '7px'}}>Create Workout</Button>
  </div>
 )       
}