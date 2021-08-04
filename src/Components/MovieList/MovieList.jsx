import React,{useState,useEffect} from 'react';
import './movieList.scss'
import { popularMovies} from '../../data'
const MovieList = () => {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        setData(popularMovies);
    }, []);
    const handleClick = (way) => {
        way === "left" ? setCurrent(current > 0 ? current - 1 : 0) :
            setCurrent(current < 1 ? current + 1 : 0);
    }
    return (
        <>
            <div className="wrapper">

                <section id="section1" style={{ transform: `translateX(-${current * 100}vw)` }}>
                   
                    {data.map((movie) => (
                         (
                        <div key={movie.id} className="item">
                            <a href={"/"}>
                                <img
                                    src={movie.src}
                                    alt="Describe " />
                            </a>
                         
                            </div>
                        )
                        
                    )) 
                    } 
                   
                </section>
                <i className="fa fa-chevron-left arrow fa-3x" onClick={() => handleClick("left")}></i>
                <i className="fa fa-chevron-right arrow fa-3x" onClick={() => handleClick()}></i>

            </div>

        </>
    );
}

export default MovieList;
