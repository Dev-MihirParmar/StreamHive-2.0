import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import VideoUploadPage from './components/VideoUploadPage';
import VideoListPage from './components/VideoListPage';
import VideoPlayerPage from './components/VideoPlayerPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/upload" component={VideoUploadPage} />
        <Route path="/videos" component={VideoListPage} />
        <Route path="/video/:id" component={VideoPlayerPage} />
      </Switch>
    </Router>
  );
}

export default App;
