import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../form.css'


export default function CreateRecipe () {
    return (
        <Form>
          <Form.Group className="mb-3" controlId="formRecipeName">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control type="recipeName" required="required" placeholder="Enter Recipe Name" maxLength={50}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="imageName" placeholder="Enter Image URL" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description" placeholder="Enter Description" maxLength={50}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formServings">
            <Form.Label>Servings</Form.Label>
            <Form.Control type="number" placeholder="Enter Number of Servings" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrepTime">
            <Form.Label>Prep Time</Form.Label>
            <Form.Control type="number" placeholder="Enter Estimated Prep Time" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCookTime">
            <Form.Label>Cook Time</Form.Label>
            <Form.Control type="number" placeholder="Enter Estimated Cook Time" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSteps">
            <Form.Label>Steps</Form.Label>
            <Form.Control type="steps" required="required" as="textarea" rows={3} placeholder="Enter Steps" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formVeganCheckbox">
        <Form.Check type="checkbox" label="Vegan" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formGlutenFree">
        <Form.Check type="checkbox" label="Gluten Free" />
      </Form.Group>
          
          <Button variant="primary" type="submit">
            Add Recipe
          </Button>
        </Form>
      );
   
   }