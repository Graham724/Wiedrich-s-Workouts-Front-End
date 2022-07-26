//React features & hooks
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

//React-Bootstrap components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'

//Other Styling
import '../Home.css'


export default function AllRecipes() {
const [recipes, setRecipes] = useState([])
     
     useEffect(() => {
          const fetchData = async () => {
               const URL = `${process.env.REACT_APP_BACKEND_URL}/api/recipes`
               const response = await fetch(URL)
               const data = await response.json()
               setRecipes(data)
          }
          fetchData()
     }, [])

 const display = recipes && recipes.map((eachRecipe) => {
  return (
     <Col xs={12} md={4} sm={6} lg={4} className='p-2' key={eachRecipe._id}>
          <CardGroup>
          <Card>
               <Card.Header style={{height: '75px'}}>
                    <Card.Title>
                         {eachRecipe.title}
                    </Card.Title>
               </Card.Header>
               <Card.Img style={{height: '300px'}} alt='Food' variant='bottom' src={eachRecipe.imgURL} />
               <ListGroup className="list-group-flush">
                    <ListGroup.Item><span style={{fontWeight: 'bold'}}>Servings: </span>{eachRecipe.serving}</ListGroup.Item>
                    <ListGroup.Item><span style={{fontWeight: 'bold'}}>Prep Time: </span>{eachRecipe.prepTime} minutes</ListGroup.Item>
                    <ListGroup.Item><span style={{fontWeight: 'bold'}}>Cook Time: </span>{eachRecipe.cookTime} minutes</ListGroup.Item>
               </ListGroup>
               <Card.Body>
                    <Card.Text style={{height: '60px'}}>
                    <span style={{fontWeight: 'bold'}}>Description: </span> {eachRecipe.desc}
                    </Card.Text>
               </Card.Body>
               <Card.Footer>
                    <Link to={`/getRecipe/${eachRecipe._id}`}>
                         <Button variant="primary">Go To Recipe</Button>
                    </Link>
               </Card.Footer>
          </Card>
          </CardGroup> 
     </Col>
  )
 })
 

 return (
  <div>
       <h1>Nutritious Recipes!</h1>
       <Container>
          <Row>
               {display}
          </Row>
     </Container>
          <Link to='/createRecipe'>   
               <Button className='create-buttons' variant="success" style={{float: 'right', marginRight: '-5px', marginTop: '50px'}}>Create Recipe</Button>
          </Link>
  </div>
 )       
}

