import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import CarDetails from './pages/car-details/CarDetails';
import CarsList from './pages/cars-list/CarsList';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<CarsList />}></Route>
                <Route path="/details/:id" element={<CarDetails />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
