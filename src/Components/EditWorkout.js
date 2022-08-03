import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../form.css'

export default function EditWorkout () {
  const {id} = useParams()

  const [title, setTitle] = useState('')
  const [imgURL, setImgURL] = useState()
  const [desc, setDesc] = useState('')
  const [time, setTime] = useState('')
  const [type, setType] = useState('')
  const [steps, setSteps] = useState('')

  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
         console.log(process.env)
         const URL = `${process.env.REACT_APP_BACKEND_URL}/api/workouts/${id}`
         console.log(URL)
         const response = await fetch(URL)
         const data = await response.json()
         setTitle(data.title)
         setImgURL(data.imgURL)
         setDesc(data.desc)
         setTime(data.time)
         setType(data.type)
         setSteps(data.steps)
    }
    fetchData()
}, [])


  const handleSubmit= async (e) => {
    e.preventDefault()

    const workout = {title, imgURL, desc, time, type, steps}
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/workouts/${id}`
    const response = await fetch(URL, {
      method: 'PATCH',
      body: JSON.stringify(workout),
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
      setTime('')
      setType('')
      setSteps('') 
      console.log('new workout edited:', data)
      navigate(`/getWorkout/${id}`)
    }
  }

    return (
        <Form className="createWork" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formWorkoutName">
            <Form.Label>Workout Name</Form.Label>
            <Form.Control 
              type="text" 
              required="required" 
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Enter Workout Name" 
              maxLength={50}/>
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
          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Estimated Time</Form.Label>
            <Form.Control 
              type="number" 
              onChange={(e) => setTime(e.target.value)}
              value={time}
              placeholder="Enter Estimated Time in minutes" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Workout Type</Form.Label>
            <Form.Select value={type} className="custom-select" onChange={(e) =>{
              const selectedType = e.target.value;
              setType(selectedType)
              }}>
                <option value="Meditation">Meditation</option>
                <option value="Upper Body Strength">Upper Body Strength</option>
                <option value="Lower Body Strength">Lower Body Strength</option>
                <option value="Core Workout">Core Workout</option>
                <option value="Flexibilty/Recovery">Flexibilty/Recovery</option>
                <option value="Yoga">Yoga</option>
                <option value="Meditation">Meditation</option>
                <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsteps">
            <Form.Label>Program</Form.Label>
            <Form.Control 
              type="text" 
              required="required" 
              onChange={(e) => setSteps(e.target.value)}
              value={steps}
              as="textarea" 
              rows={3} 
              placeholder="Enter Steps" />
          </Form.Group>  
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      );
   
   }