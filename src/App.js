import './css/main.css';
import { Route, Routes } from 'react-router-dom';
import Resources from './components/Resources';

function App() {
    return (
        <Routes>
            <Route index element={<Resources activeCategory='HTML'/>} />
            <Route path='css' element={<Resources activeCategory='CSS' />} />
            <Route path='javascript' element={<Resources activeCategory='JavaScript' />} />
            <Route path='react' element={<Resources activeCategory='React' />} />
            <Route path='sanity' element={<Resources activeCategory='Sanity' />} />
        </Routes>
    );
}

export default App;

// <Resources activeCategory={activeCategory}></Resources>

/*

 <div className='container'>
                <Header></Header>

                <Nav
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}></Nav>

                <Resources activeCategory={activeCategory}></Resources>
                
                
            </div>
 */
