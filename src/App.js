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
import EditRecipe from './Components/EditRecipe';
import EditWorkout from './Components/EditWorkout';


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
                <Link to="/">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/recipes">Recipes</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/workouts">Workouts</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/createRecipe">Create Recipe</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/createWorkout">Create Workout</Link>
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
            <Route path ={`/deleteWorkout/:id`} element={<AllRecipes/>} />
            <Route path ={`/updateRecipe/:id`} element={<EditRecipe/>} />
            <Route path ={`/updateWorkout/:id`} element={<EditWorkout/>} />
          </Routes>
        </div>
        </Router>
    </div>
  );
}

export default App;
