//React Features
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

//Styling
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

//Components
import Home from './Components/Home'
import Recipes from './Components/Recipes'
import Workouts from './Components/Workouts';
import CreateRecipe from './Components/CreateRecipe';
import CreateWorkout from './Components/CreateWorkout'


function App() {


  //Mock Data
  // const recipes = [
  //   {
  //     'Title': 'Lime and Cilantro Chicken and Rice',
  //     'Description': 'Fresh and easy chicken dish',
  //     'Img': 'Images/Default_Chicken_Breast.jpg',
  //     'Servings': 4,
  //     'PrepTime': 15,
  //     'CookTime': 45,
  //     'Gluten Free': true,
  //     'Vegan': false,
  //     'Steps': 'text'
  //   },
  //   {
  //     'Title': 'Chocolate & Raspberry Protein Shake',
  //     'Description': 'Super quick post workout treat',
  //     'Img': 'Images/Default_Chicken_Breast.jpg',
  //     'Servings': 1,
  //     'PrepTime': 5,
  //     'CookTime': 5,
  //     'Gluten Free': true,
  //     'Vegan': false,
  //     'Steps': 'text'
  //   },
  //   {
  //     'Title': 'Veggie Omelet',
  //     'Description': 'A breakfast classic',
  //     'Img': 'Images/Default_Chicken_Breast.jpg',
  //     'Servings': 1,
  //     'PrepTime': 10,
  //     'CookTime': 5,
  //     'Gluten Free': true,
  //     'Vegan': false,
  //     'Steps': 'text'
  //   },
  //   {
  //     'Title': 'Terriyaki Turkey Meatballs',
  //     'Description': 'For a savory yet healthy dinner',
  //     'Img': 'Images/Default_Chicken_Breast.jpg',
  //     'Servings': 4,
  //     'PrepTime': 15,
  //     'CookTime': 15,
  //     'Gluten Free': true,
  //     'Vegan': false,
  //     'Steps': 'text'
  //   },
  //   {
  //     'Title': 'Salmon and Asparagus',
  //     'Description': 'Treat yourself to the gifts of the sea!',
  //     'Img': 'Images/Default_Chicken_Breast.jpg',
  //     'Servings': 4,
  //     'PrepTime': 15,
  //     'CookTime': 25,
  //     'Gluten Free': true,
  //     'Vegan': false,
  //     'Steps': 'text'
  //   },
  //   {
  //     'Title': 'Quinoa Salad',
  //     'Description': 'Get some healthy grain in your system',
  //     'Img': 'Images/Default_Chicken_Breast.jpg',
  //     'Servings': 4,
  //     'PrepTime': 15,
  //     'CookTime': 5,
  //     'Gluten Free': true,
  //     'Vegan': true,
  //     'Steps': 'text'
  //   }
  // ]

  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <h1 className='title'>Wiedrich's Workouts</h1>
      </header>
      <nav className='App-nav'>
      <Container>
            <Nav variant='pills' fill defaultActiveKey="/Home">
              <Nav.Item>
                <Nav.Link>
                <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                <Link to="/recipes">Recipes</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                <Link to="/workouts">Workouts</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                <Link to="/createRecipe">Create Recipe</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                <Link to="/createWorkout">Create Workout</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
      </nav>

      <div className='display'>
          <Routes>
            <Route path ='/' element={<Home/>} />
            <Route path ='/recipes' element={<Recipes/>} />
            <Route path ='/workouts' element={<Workouts/>} />
            <Route path ='/createRecipe' element={<CreateRecipe/>} />
            <Route path ='/createWorkout' element={<CreateWorkout/>} />
          </Routes>
        </div>
        </Router>
    </div>
  );
}

export default App;
