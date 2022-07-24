import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../form.css'


export default function CreateRecipe () {
    return (
        <Form>
          <Form.Group className="mb-3" controlId="formRecipeName">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control type="recipeName" placeholder="Enter Recipe Name" />
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
            <Form.Control type="steps" placeholder="Enter Steps" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Add Recipe
          </Button>
        </Form>
      );
   
   }