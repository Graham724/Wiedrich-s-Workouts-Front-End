import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../form.css'


export default function CreateRecipe () {

  const [title, setTitle] = useState('')
  const [imgURL, setImgURL] = useState()
  const [desc, setDesc] = useState('')
  const [serving, setServing] = useState('')
  const [prepTime, setPrepTime] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit= async (e) => {
    e.preventDefault()

    const recipe = {title, imgURL, desc, serving, prepTime, cookTime, ingredients, steps}
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/recipes`
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()

    if (!response.ok) {
      setError(data.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setImgURL('')
      setDesc('')
      setServing('')
      setPrepTime('')
      setCookTime('')
      setIngredients('')
      setSteps('')
      console.log('new recipe added:', data);
      navigate('/recipes')
    }
  }

    return (
        <Form className="createRec" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formRecipeName">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control 
            type="text" 
            required="required" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Enter Recipe Name" 
            maxLength={40}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control 
            type="text" 
            onChange={(e) => setImgURL(e.target.value)}
            value={imgURL}
            placeholder="Enter Image URL" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control 
            type="text" 
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            placeholder="Enter Description" 
            maxLength={50}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formServings">
            <Form.Label>Servings</Form.Label>
            <Form.Control 
            type="number" 
            onChange={(e) => setServing(e.target.value)}
            value={serving}
            placeholder="Enter Number of Servings" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrepTime">
            <Form.Label>Prep Time</Form.Label>
            <Form.Control 
            type="number" 
            onChange={(e) => setPrepTime(e.target.value)}
            value={prepTime}
            placeholder="Enter Estimated Prep Time in minutes" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCookTime">
            <Form.Label>Cook Time</Form.Label>
            <Form.Control 
            type="number" 
            onChange={(e) => setCookTime(e.target.value)}
            value={cookTime}
            placeholder="Enter Estimated Cook Time in minutes" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCookTime">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control 
            type="text" 
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
            required="required"
            as="textarea" 
            rows={3} 
            placeholder="Enter Ingredients" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSteps">
            <Form.Label>Steps</Form.Label>
            <Form.Control 
            type="steps" 
            required="required"
            onChange={(e) => setSteps(e.target.value)}
            value={steps} 
            as="textarea" 
            rows={3} 
            placeholder="Enter Steps" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Recipe
          </Button>
        </Form>
      );
   
   }