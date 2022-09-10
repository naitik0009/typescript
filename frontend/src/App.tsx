import Header from './components/header';
import Homescreen from './screens/home';
import Cartscreen from './screens/cart';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
    return (

        <div className="App">
            <BrowserRouter>
                <Header/>
                <div>
                   <Routes>
                   <Route  path="/"  element={<Homescreen/>}/>
                        
                    
                    <Route path="/cart" element={<Cartscreen/>}/>
                        
                    
                   </Routes>
                </div>
            </BrowserRouter>

        </div>
    );
}

export default App;
