import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Hero from './Components/Hero';
import Proccess from './Components/Proccess';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Hero />
            <Proccess />
        </div>
    )
}

export default App