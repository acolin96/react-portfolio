import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Home from './components/Home';
import Nav from './components/Nav';
import Project from './components/Project';
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
    return (
                <Router>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}/>
                    <Route
                        path="/About"
                        element={<About />}/>
                    <Route
                        path="/Project"
                        element={<Project />}/>
                    <Route
                        path="/Contact"
                        element={<Contact />}/>
                    <Route
                        path="/Resume"
                        element={<Resume />}/>
                </Routes>

                <Footer />
                </Router>
    );
};