import React from 'react';
import MovieList from '../Components/MovieList/MovieList';
import Navbar from '../Components/Navbar/Navbar';
import Slider from '../Components/SlidePrincipal/Slider';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Slider />
            <MovieList/>
        </div>
    );
}

export default Home;
