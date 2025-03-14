import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import AddMovie from './addmovie';
import Contact from './contact';
import Home from './home';
import Events from './myevents';
import ViewEvent from './viewevent';
export default function App(){
  
  return(
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">MyShow</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to={"/"}>Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/movies"}>Movies</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/events"}>Events</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/contact"}>Contact</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/movies' element={<AddMovie></AddMovie>}></Route>
          <Route path='/events' element={<Events></Events>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/viewdetails/:id/:name' element={<ViewEvent></ViewEvent>}></Route>
        </Routes>
    </div>
  );
}