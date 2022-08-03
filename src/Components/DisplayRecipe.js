//React features & hooks
import { useEffect, useState } from 'react'
import { useNavigate, BrowserRouter as Router, Link, Route, Routes, useParams } from 'react-router-dom'

//React-Bootstrap components
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

//Other styling
import '../recipeDisplay.css'

export default function DisplayRecipe () {
 const {id} = useParams()
 console.log(id)
 const [recipe, setRecipe] = useState([])
 const navigate = useNavigate()

 let handleDelete = async () => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/api/recipes/${id}`
  await fetch(URL, {
   method: "DELETE",
  });
  navigate('/recipes')
 };
     
     useEffect(() => {
          const fetchData = async () => {
               console.log(process.env)
               const URL = `${process.env.REACT_APP_BACKEND_URL}/api/recipes/${id}`
               console.log(URL)
               const response = await fetch(URL)
               const data = await response.json()
               setRecipe(data)
          }
          fetchData()
     }, [])

 const display = (
       <Container className='recipe-display'>
         <Row>
          <Col className='recipe-img-desc'>
            <img alt='Food' variant='bottom' src={recipe.imgURL}/>
          </Col>
          <Col>
          <header className='recipe-display-header'>
            <h1>{recipe.title}</h1>
            <p>
             <span style={{fontWeight: 'bold'}}>Servings: </span>{recipe.serving} </p>
            <p>
             <span style={{fontWeight: 'bold'}}>Prep Time: </span>{recipe.prepTime} minutes </p>
            <p>
             <span style={{fontWeight: 'bold'}}>Cook Time: </span>{recipe.cookTime} minutes </p>
             <br></br>
             <p style={{fontWeight: 'bold', fontSize: '20px'}}>{recipe.desc}</p>
           </header>
           <h2>Ingredients: </h2>
           <p>{recipe.ingredients}</p>
           <h2>Steps: </h2>
           <p>{recipe.steps}</p>
          </Col>
         </Row>
       </Container>
      )

 return (
      <div>
        <Row>
           {display}
        </Row>
        <Button onClick={handleDelete} className='delete-buttons' variant="danger" style={{float: 'left', marginRight: '7px'}}>
            Delete Recipe
           </Button>
        <Link to={`/updateRecipe/${id}`}>
           <Button className='edit-buttons' variant="warning" style={{float: 'left', marginRight: '7px'}}>
             Edit Recipe
            </Button>
        </Link>
           <Link to='/recipes'>
            <Button className='back-buttons' variant="info" style={{float: 'left'}}>
              Back to Recipes
             </Button>
           </Link>
      </div>
     )    
}