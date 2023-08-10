import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import PostComment from './Pages/PostComment/PostComment';
import SinglePost from './Pages/SinglePost/SinglePost';
import Auth from './Pages/AuthPage/Auth';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/signin' element={<Auth/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/:post' element={<SinglePost/>}/>
          <Route exact path='/:comment' element={<PostComment/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
