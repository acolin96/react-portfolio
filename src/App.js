import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/contact/';
import About from './components/about/';
import Resume from './components/resume/';
import Home from './components/home';
import Nav from './components/nav/';
import Projects from './components/project/';
import Footer from './components/footer'

// import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
    return (
                <Router>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}/>
                    <Route
                        path="/about"
                        element={<About />}/>
                    <Route
                        path="/projects"
                        element={<Projects />}/>
                    <Route
                        path="/contact"
                        element={<Contact />}/>
                    <Route
                        path="/resume"
                        element={<Resume />}/>
                </Routes>

                <Footer />
                </Router>
    );
};