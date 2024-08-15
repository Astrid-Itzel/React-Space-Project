import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx'
import Main from './Components/Main.jsx'
import About from './Components/About.jsx'
import Astros from './Components/Astros.jsx'
import Apod from './Components/Apod.jsx'

import './App.css'

function App() {

    const linksData = [
        { name: 'Home', href: '/'},
        { name: 'About', href:'/About'},
        { name: 'Astros', href: '/astros'},
        { name: 'APOD', href: '/APOD'},

    ]

    return (
        <>
            <Navbar header='Astrid' links={linksData} /> 
            <Routes>
                <Route
                    element={<Main />}
                    path='/'
                />
                <Route
                    element={<About />}
                    path='/About'
                    />
                <Route 
                    element={<Astros />}
                    path='/astros'
                />
                <Route
                    element={<Apod />}
                    path='/APOD'
                />
            </Routes>
        </>
    )
}

export default App
