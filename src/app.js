import { useState, createContext } from 'react';
import React from 'react';
import Landing from './sections/Landing';
import About from './sections/About';
import Footer from './sections/Footer';
import Projects from './sections/Projects';
import Challenges from './sections/Challenges';
import Skills from './sections/Skills';
import Modale from './components/Modal';
import { fetchData } from './functions';
import {
    endpointChallenges,
    endpointProjects,
} from './variables';
import { useEffect } from 'react';

export const languageContext = createContext('en');
export const modalContext = createContext();

export default function App() {
    const [projects, setProjects] = useState([]);
    const [challenges, setChallenges] = useState([]);
    const [challengeActive, setChallengeActive] =
        useState('');

    useEffect(() => {
        fetch(endpointProjects)
            .then((res) => res.json())
            .then((project) => {
                setProjects(project);
            })
            .catch((err) => console.log(err));
        fetch(endpointChallenges)
            .then((res) => res.json())
            .then((challenge) => {
                setChallenges(challenge);
                console.log(challenge[0]['_id']);
            });
    }, []);
    const [language, setLanguage] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <languageContext.Provider value='en'>
            <modalContext.Provider
                value={{
                    isOpen,
                    setIsOpen,
                    challengeActive,
                    setChallengeActive,
                }}
            >
                <Modale challenges={challenges} />
                <Landing />
                <About />
                <Skills />
                <Projects projects={projects} />
                <Challenges challenges={challenges} />
                <Footer />
            </modalContext.Provider>
        </languageContext.Provider>
    );
}
