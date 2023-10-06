import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import SinglePost from './Pages/SinglePost/SinglePost';
import Auth from './Pages/AuthPage/Auth';
import Comment from './Components/Comment/Comment';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/signin' element={<Auth/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/:post' element={<SinglePost/>}/>
          <Route exact path='/compose/:post' element={<Comment/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
