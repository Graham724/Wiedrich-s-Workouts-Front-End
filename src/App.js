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
  const recipes = [
    {
      'Title': 'Lime and Cilantro Chicken and Rice',
      'Description': 'Fresh and easy chicken dish',
      'Img': 'Images/Default_Chicken_Breast.jpg',
      'Servings': 4,
      'PrepTime': 15,
      'CookTime': 45
    },
    {
      'Title': 'Chocolate & Raspberry Protein Shake',
      'Description': 'Super quick post workout treat',
      'Img': 'Images/Default_Chicken_Breast.jpg',
      'Servings': 1,
      'PrepTime': 5,
      'CookTime': 5
    },
    {
      'Title': 'Veggie Omelet',
      'Description': 'A breakfast classic',
      'Img': 'Images/Default_Chicken_Breast.jpg',
      'Servings': 1,
      'PrepTime': 10,
      'CookTime': 5
    },
    {
      'Title': 'Terriyaki Turkey Meatballs',
      'Description': 'For a savory yet healthy dinner',
      'Img': 'Images/Default_Chicken_Breast.jpg',
      'Servings': 4,
      'PrepTime': 15,
      'CookTime': 15
    },
    {
      'Title': 'Salmon and Asparagus',
      'Description': 'Treat yourself to the gifts of the sea!',
      'Img': 'Images/Default_Chicken_Breast.jpg',
      'Servings': 4,
      'PrepTime': 15,
      'CookTime': 25
    },
    {
      'Title': 'Quinoa Salad',
      'Description': 'Get some healthy grain in your system',
      'Img': 'Images/Default_Chicken_Breast.jpg',
      'Servings': 4,
      'PrepTime': 15,
      'CookTime': 5
    }
  ]

  const workouts = [
    {
      'Title': '10 Minute Shoulder Workout',
      'Description': 'Description',
      'Img': 'Images/Default_Workout.jpg',
      'Type': 'Upper Body Strength',
      'Time': 10
    },
    {
      'Title': '30 Minute Core Workout',
      'Description': 'Description',
      'Img': 'Images/Default_Workout.jpg',
      'Type': 'Core Strength'
    },
    {
      'Title': 'Full Length Upper Body Workout',
      'Description': 'Description',
      'Img': 'Images/Default_Workout.jpg',
      'Type': 'Upper Body Strength',
      'Time': 60
    },
    {
      'Title': 'Mobility Routine',
      'Description': 'Description',
      'Img': 'Images/Default_Workout.jpg',
      'Type': 'Flexibilty/Recovery',
      'Time': 15
      
    },
    {
      'Title': '5 Minute Pre-Workout Stretch',
      'Description': 'Description',
      'Img': 'Images/Default_Workout.jpg',
      'Type': 'Warmup',
      'Time': 5
    },
    {
      'Title': '10 Minute Yoga Exercise',
      'Description': 'Description',
      'Img': 'Images/Default_Workout.jpg',
      'Type': 'Flexibilty/Recovery',
      'Time': 10
    }
  ]

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
            <Route path ='/recipes' element={<Recipes recipes={recipes}/>} />
            <Route path ='/workouts' element={<Workouts workouts={workouts}/>} />
            <Route path ='/createRecipe' element={<CreateRecipe/>} />
            <Route path ='/createWorkout' element={<CreateWorkout/>} />
          </Routes>
        </div>
        </Router>
    </div>
  );
}

export default App;
