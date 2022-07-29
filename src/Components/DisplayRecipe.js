//React features & hooks
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes, useParams } from 'react-router-dom'

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
 const recipeID = id
 const [recipe, setRecipe] = useState([])

 function handleDelete(e) {
  e.preventDefault()
  const newRecipe = recipe.filter((item) => item.id !== id);

  setRecipe(newRecipe)
 }
     
     useEffect(() => {
          const fetchData = async () => {
               console.log(process.env)
               const URL = `${process.env.REACT_APP_BACKEND_URL}/api/recipes/${recipeID}`
               console.log(URL)
               const response = await fetch(URL)
               const data = await response.json()
               setRecipe([data])
          }
          fetchData()
     }, [])

 const display = recipe && recipe.map((eachRecipe) => {
      return (
       <Container className='recipe-display'>
         <Row>
          <Col className='recipe-img-desc'>
            <img alt='Food' variant='bottom' src={eachRecipe.imgURL}/>
            <p>{eachRecipe.desc}</p>
          </Col>
          <Col>
          <header className='recipe-display-header'>
            <h1>{eachRecipe.title}</h1>
            <p>
             <span style={{fontWeight: 'bold'}}>Servings: </span>{eachRecipe.serving} </p>
            <p>
             <span style={{fontWeight: 'bold'}}>Prep Time: </span>{eachRecipe.prepTime} minutes </p>
            <p>
             <span style={{fontWeight: 'bold'}}>Cook Time: </span>{eachRecipe.cookTime} minutes </p>
             <p>
             {/* <span style={{fontWeight: 'bold'}}>Gluten Free: </span>{eachRecipe.glutenFree}
             <span style={{fontWeight: 'bold'}}>Vegan: </span>{eachRecipe.glutenFree} */}
             </p>
           </header>
           <p>{eachRecipe.steps}</p>
          </Col>
         </Row>
       </Container>
      )
     })

 return (
      <div>
        <Row>
           {display}
        </Row>
        <Link to={`/deleteRecipe/${recipeID}`}>
          <Button disabled onClick={handleDelete} className='delete-buttons' variant="danger" style={{float: 'left', marginRight: '7px'}}>
            Delete Recipe
           </Button>
        </Link>
           <Button disabled className='edit-buttons' variant="warning" style={{float: 'left', marginRight: '7px'}}>
             Edit Recipe
            </Button>
           <Link to='/recipes'>
            <Button className='back-buttons' variant="info" style={{float: 'left'}}>
              Back to Recipes
             </Button>
           </Link>
      </div>
     )    
}