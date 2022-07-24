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
  const recipes = ['Lime and Cilantro Chicken and Rice', 'Chocolate and Raspberry Protein Shake', 'Veggie Omelet', 'Sugar Free Terriyaki Turkey Meatballs', 'Salmon and Asparagus']

  const workouts = ['10 Minute Shoulder Workout', '30 Minute Core Workout', 'Full Length Upper Body Workout', 'Mobility Routine', ' 5 Minute Pre-Workout Stretch']

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
