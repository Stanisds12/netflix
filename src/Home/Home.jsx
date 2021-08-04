import React from 'react';
import Footer from '../Components/Footer/Footer';
import MovieList from '../Components/MovieList/MovieList';
import Navbar from '../Components/Navbar/Navbar';
import Slider from '../Components/SlidePrincipal/Slider';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Slider />
            <MovieList />
            <Footer/>
        </div>
    );
}

export default Home;
