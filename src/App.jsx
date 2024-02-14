import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Grid from './components/Grid';
import PreviewPage from './components/PreviewPage';
import AddYourOwn from './components/AddYourOwn';
import Testimonial from './components/Testimonial';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div style={{width:"100vw !important"}}>
      <Navigation />
      <div className="row">
        <PreviewPage/>
        <Grid/>
        <AddYourOwn/>
        <Testimonial/>
        <GetStarted/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
