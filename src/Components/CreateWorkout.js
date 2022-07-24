import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../form.css'

export default function CreateWorkout () {
    return (
        <Form>
          <Form.Group className="mb-3" controlId="formWorkoutName">
            <Form.Label>Workout Name</Form.Label>
            <Form.Control type="recipeName" required="required" placeholder="Enter Workout Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="imageName" placeholder="Enter Image URL" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description" placeholder="Enter Description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsteps">
            <Form.Label>Steps</Form.Label>
            <Form.Control type="steps" required="required" as="textarea" rows={3} placeholder="Enter Steps" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Add Workout
          </Button>
        </Form>
      );
   
   }