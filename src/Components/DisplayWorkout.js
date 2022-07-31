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

export default function DisplayWorkout () {
 const {id} = useParams()
 console.log(id)
 const [workout, setWorkout] = useState([])

 // function handleDelete(recipeID) {
 //  const newRecipe = recipe.filter((item) => item.id !== id);

 //  setRecipe(newRecipe)
 // }
     
     useEffect(() => {
          const fetchData = async () => {
               console.log(process.env)
               const URL = `${process.env.REACT_APP_BACKEND_URL}/api/workouts/${id}`
               console.log(URL)
               const response = await fetch(URL)
               const data = await response.json()
               setWorkout([data])
          }
          fetchData()
     }, [])

 const display = workout && workout.map((eachWorkout) => {
      return (
       <Container className='recipe-display'>
         <Row>
          <Col className='recipe-img-desc'>
            <img alt='Food' variant='bottom' src={eachWorkout.imgURL}/>
            <p>{eachWorkout.desc}</p>
          </Col>
          <Col>
          <header className='recipe-display-header'>
            <h1>{eachWorkout.title}</h1>
            <p>
             <span style={{fontWeight: 'bold'}}>Estimated Time: </span>{eachWorkout.time} minutes </p>
            <p>
             <span style={{fontWeight: 'bold'}}>Type: </span>{eachWorkout.type} </p>
           </header>
           <p>{eachWorkout.steps}</p>
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
          <Button className='delete-buttons' variant="danger" style={{float: 'left', marginRight: '7px'}}>
           Delete Workout
           </Button>
        <Link to={`/updateWorkout/${id}`}>
           <Button className='edit-buttons' variant="warning" style={{float: 'left', marginRight: '7px'}}>
            Edit Workouts
           </Button>
        </Link>
        <Link to='/workouts'>
            <Button className='back-buttons' variant="info" style={{float: 'left'}}>
             Back to Workouts
             </Button>
         </Link>
      </div>
     )    
}