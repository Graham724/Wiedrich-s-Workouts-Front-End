//React Features
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

//Styling
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

//Components
import Home from './Components/Home'
import AllRecipes from './Components/AllRecipes'
import AllWorkouts from './Components/AllWorkouts';
import CreateRecipe from './Components/CreateRecipe';
import CreateWorkout from './Components/CreateWorkout'
import DisplayRecipe from './Components/DisplayRecipe';
import DisplayWorkout from './Components/DisplayWorkout';


function App() {
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
            <Route path ='/recipes' element={<AllRecipes/>} />
            <Route path ='/workouts' element={<AllWorkouts/>} />
            <Route path ='/createRecipe' element={<CreateRecipe/>} />
            <Route path ='/createWorkout' element={<CreateWorkout/>} />
            <Route path ={`/getRecipe/:id`} element={<DisplayRecipe/>} />
            <Route path ={`/getWorkout/:id`} element={<DisplayWorkout/>} />
            <Route path ={`/deleteRecipe/:id`} element={<AllRecipes/>} />
            <Route path ={`/deleteWorkout/:id`} element={<AllWorkouts/>} />
            <Route path ={`/updateRecipe/:id`} element={<AllRecipes/>} />
          </Routes>
        </div>
        </Router>
    </div>
  );
}

export default App;
