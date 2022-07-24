import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Recipes(props) {
 const recipes = props.recipes.filter(x => 
  x.Days === 1
  )

 console.log(recipes)
 const recipeCards = recipes.map((eachRecipe) => {
  return <Col xs={12} md={4} sm={6} lg={4} className='p-2'><Card>
  <Card.Img alt='Food' variant='bottom' src={eachRecipe.Img} />
  <Card.Body>
      <Card.Title>{eachRecipe.Title}</Card.Title>
      <Card.Text style={{ height: '50px' }}>{eachRecipe.Text}</Card.Text>
      <Button variant="primary" disabled>Go To Recipe</Button>
  </Card.Body>
</Card> 
</Col>
 })

 return (
  <div>
       <h1>Nutritious Recipes!</h1>
       <Container>
         <Row>
              {recipeCards}
         </Row>
       </Container>
  </div>
 )       
}