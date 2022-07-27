//React features & hooks
import { useEffect, useState } from 'react'

//React-Bootstrap components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Recipes(props) {
const [recipes, setRecipes] = useState([])
     
     useEffect(() => {
          const fetchData = async () => {
               console.log(process.env)
               const URL = `${process.env.REACT_APP_BACKEND_URL}/api/recipes`
               const response = await fetch(URL)
               const data = await response.json()
               setRecipes(data)
          }
          fetchData()
     }, [])

 const display = recipes && recipes.map((eachRecipe) => {
  return (
     <Col xs={12} md={4} sm={6} lg={4} className='p-2'>
          <CardGroup>
          <Card>
               <Card.Header>
                    <Card.Title>
                         {eachRecipe.title}
                    </Card.Title>
               </Card.Header>
               <Card.Img alt='Food' variant='bottom' src={eachRecipe.imgURL} />
               <ListGroup className="list-group-flush">
                    <ListGroup.Item><span style={{fontWeight: 'bold'}}>Servings: </span>{eachRecipe.serving}</ListGroup.Item>
                    <ListGroup.Item><span style={{fontWeight: 'bold'}}>Prep Time: </span>{eachRecipe.prepTime} minutes</ListGroup.Item>
                    <ListGroup.Item><span style={{fontWeight: 'bold'}}>Cook Time: </span>{eachRecipe.cookTime} minutes</ListGroup.Item>
               </ListGroup>
               <Card.Body>
                    <Card.Text>
                    <span style={{fontWeight: 'bold'}}>Description: </span> {eachRecipe.desc}
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
               {display}
          </Row>
       <Button className='create-buttons' variant="primary" style={{float: 'right', marginRight: '7px'}}>Create Recipe</Button>
  </div>
 )       
}

