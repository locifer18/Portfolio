import About from "./components/About";
import Hero from "./components/Hero";
import NeuralNetwork from "./components/NeuralNetwork";
import Node from "./components/Node";
import { motion } from 'framer-motion';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from './components/Skills';
import Education from './components/Education';
import "./App.css"
import React, { useEffect, useState } from 'react';


function App() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const updateCursor = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY })
            setMousePos({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };
        window.addEventListener("mousemove", updateCursor);
        return () => {
            window.removeEventListener("mousemove", updateCursor);
        };
    }, []);

    return (
        <div className="App">
            <NeuralNetwork />
            <Node />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <Hero />
                <About />
                <Skills />
                <Education />
                <Projects />
                <Contact />
            </motion.div>
        </div>
    );
}

export default App