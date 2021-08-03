import React from 'react';
import './slider.scss'
const Slider = () => {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="assets/foto2.webp" className="d-block w-100" alt="..." />
                    </div>

                </div>
            </div>
            
        </>
            );
}

 export default Slider;
