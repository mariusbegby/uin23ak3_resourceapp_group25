import './css/main.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import { useState } from 'react';

function App() {
    const [activeCategory, setActiveCategory] = useState('HTML');

    return (
        <div className='container'>
            <Header></Header>

            <Nav activeCategory={activeCategory} setActiveCategory={setActiveCategory}></Nav>

            <Main activeCategory={activeCategory}></Main>
        </div>
    );
}

export default App;
