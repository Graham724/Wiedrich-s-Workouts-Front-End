import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Recipes(props) {
 const recipes = props.recipes.map((eachRecipe) => {
  return (
     <Col xs={12} md={4} sm={6} lg={4} className='p-2'>
          <CardGroup>
          <Card>
               <Card.Header>
                    <Card.Title>
                         {eachRecipe.Title}
                    </Card.Title>
               </Card.Header>
               <Card.Img alt='Food' variant='bottom' src={eachRecipe.Img} />
               <ListGroup className="list-group-flush">
                    <ListGroup.Item><span style={{fontWeight: 'bold'}}>Servings: </span>{eachRecipe.Servings}</ListGroup.Item>
                    <ListGroup.Item><span style={{fontWeight: 'bold'}}>Prep Time: </span>{eachRecipe.PrepTime} minutes</ListGroup.Item>
                    <ListGroup.Item><span style={{fontWeight: 'bold'}}>Cook Time: </span>{eachRecipe.CookTime} minutes</ListGroup.Item>
               </ListGroup>
               <Card.Body>
                    <Card.Text>
                    <span style={{fontWeight: 'bold'}}>Description: </span> {eachRecipe.Description}
                    </Card.Text>
               </Card.Body>
               <Card.Footer>
                    <Button variant="primary">Go To Recipe</Button>
               </Card.Footer>
          </Card>
          </CardGroup> 
     </Col>
  )
 })
 

 return (
  <div>
       <h1>Nutritious Recipes!</h1>
          <Row>
               {recipes}
          </Row>
       <Button className='create-buttons' variant="primary" style={{float: 'right', marginRight: '7px'}}>Create Recipe</Button>
  </div>
 )       
}

