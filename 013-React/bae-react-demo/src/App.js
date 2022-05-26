// import AboutMe from './components/001-Components/AboutMe';
// import HelloWorld from './components/001-Components/HelloWorld';
// import WebPage from './components/002-Hierarchy/WebPage';
// import PetManager from './components/003-Props/PetManager';
import StateManagerTwo from './components/004-State/state-recap/StateManagerTwo';
import StateManager from './components/004-State/StateManager';
// import Form from './components/005-Forms/Exercise/Form';
import ManagerForm from './components/005-Forms/FormsWithState/ManagerForm';
import PizzaManager from './components/005-Forms/Pizza/PizzaManager';
import PrintText from './components/005-Forms/PrintText';
import './css/App.css';
import './css/index.css';

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './components/007-Project/Home';
import Nav from './components/007-Project/Nav';
import Results from './components/007-Project/Results';
import About from './components/007-Project/About';
import Form from './components/007-Project/Form';
import Footer from './components/007-Project/Footer';
import Result from './components/007-Project/Result';

function App() {
  return (
    <div className="App">
      {/* <WebPage/> */}
      {/* <Manager/> */}
      {/* <StateManager/> */}
      {/* <StateManagerTwo/> */}
      {/* <PrintText/> */}
      {/* <ManagerForm/> */}
      {/* <Form/> */}
      {/* <PizzaManager/> */}

      {/* <BrowserRouter> */}
      {/* This will be rendered on EVERY PAGE */}
        {/* <Nav/> */}
        {/* <Routes> */}
          {/* When the URL is / take you to element Home */}
          {/* <Route path="/" element={<Home/>}/> */}
          {/* When the URL is /about take you to element About */}
          {/* <Route path="/about" element={<About/>}/> */}
          {/* Route with an ID parameter, id can be used in the web page */}
          {/* <Route path="/shop/:id" element={<Shop/>}/> */}
          {/* </Routes> */}
        {/* <Footer/> */}
      {/* </BrowserRouter> */}

      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/results" element={<Results/>}/>
            <Route path="/results/:id" element={<Result/>}/>
            <Route path="/form" element={<Form/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
