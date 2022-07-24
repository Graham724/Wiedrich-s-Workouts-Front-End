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


function App() {

  //Mock data
  // const recipes = ['Lime and Cilantro Chicken and Rice', 'Chocolate and Raspberry Protein Shake', 'Veggie Omelet', 'Sugar Free Terriyaki Turkey Meatballs', 'Salmon and Asparagus']

  const recipes = [
    {
      'Title': 'Lime and Cilantro Chicken and Rice',
      'Text': 'Fresh and easy chicken dish',
      'Img': 'Images/Default_Chicken_Breast.jpg',
      'Days': 1
    },
    {
      'Title': 'Chocolate and Raspberry Protein Shake',
      'Text': 'Super quick post workout treat',
      'Img': 'Images/Default_Chicken_Breast.jpg',
      'Days': 1
    },
    {
      'Title': 'Veggie Omelet',
      'Text': 'A breakfast classic',
      'Img': 'Images/Default_Chicken_Breast.jpg',
      'Days': 1
    },
    {
      'Title': 'Terriyaki Turkey Meatballs',
      'Text': 'For a savory yet healthy dinner',
      'Img': 'Images/Default_Chicken_Breast.jpg',
      'Days': 1
    },
    {
      'Title': 'Salmon and Asparagus',
      'Text': 'Treat yourself to the gifts of the sea!',
      'Img': 'Images/Default_Chicken_Breast.jpg',
      'Days': 1
    }
  ]

  const workouts = [
    {
      'Title': '10 Minute Shoulder Workout',
      'Text': 'text',
      'Img': 'Images/Default_Workout.jpg',
      'Days': 1
    },
    {
      'Title': '30 Minute Core Workout',
      'Text': 'text',
      'Img': 'Images/Default_Workout.jpg',
      'Days': 1
    },
    {
      'Title': 'Full Length Upper Body Workout',
      'Text': 'text',
      'Img': 'Images/Default_Workout.jpg',
      'Days': 1
    },
    {
      'Title': 'Mobility Routine',
      'Text': 'text',
      'Img': 'Images/Default_Workout.jpg',
      'Days': 1
    },
    {
      'Title': '5 Minute Pre-Workout Stretch',
      'Text': 'text',
      'Img': 'Images/Default_Workout.jpg',
      'Days': 1
    }
  ]

  // const workouts = ['10 Minute Shoulder Workout', '30 Minute Core Workout', 'Full Length Upper Body Workout', 'Mobility Routine', ' 5 Minute Pre-Workout Stretch']

  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <h1 className='title'>Wiedrich's Workouts</h1>
        <Container>
            <Nav variant='tabs' fill>
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
            </Nav>
          </Container>
      </header>

      <div className='display'>
          <Routes>
            <Route path ='/' element={<Home/>} />
            <Route path ='/recipes' element={<Recipes recipes={recipes}/>} />
            <Route path ='/workouts' element={<Workouts workouts={workouts}/>} />
            {/* <Route path ='/tickets' element={<Tickets tickets={tickets}/>} />
            <Route path ='/signin' element={<Signin/>} /> */}
          </Routes>
        </div>
        </Router>
    </div>
  );
}

export default App;
