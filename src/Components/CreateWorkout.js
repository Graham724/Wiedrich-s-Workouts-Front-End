import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../form.css'

export default function CreateWorkout () {
    return (
        <Form>
          <Form.Group className="mb-3" controlId="formWorkoutName">
            <Form.Label>Workout Name</Form.Label>
            <Form.Control type="recipeName" required="required" placeholder="Enter Workout Name" maxLength={50}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="imageName" placeholder="Enter Image URL" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description" placeholder="Enter Description" maxLength={50}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Estimated Time</Form.Label>
            <Form.Control type="number" placeholder="Enter Estimated Time" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Workout Type</Form.Label>
            <Form.Select >
              <option>Upper Body Strength</option>
              <option>Lower Body Strength</option>
              <option>Core Workout</option>
              <option>Flexibilty/Recovery</option>
              <option>Yoga</option>
              <option>Meditation</option>
            </Form.Select>
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