import React, { useEffect, useState } from "react";
import { Slide, Fade, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

const ImageSlider = ({ images }) => {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (

        <Fade canSwipe={true} autoplay={false}>
            {images.map((images, index) => (
                <div style={{ display: 'flex', justifyContent: 'center' }} key={index}>
                   
                        <div style={{height:500, width:600, borderRadius:'20%' , borderColor : '#ffa31a', borderStyle:'solid' }}>
                            <img src={images.url} style={{height:'100%', width:'100%', borderRadius:'20%'}}/>
                        </div>
                  
                    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '40%', flexDirection: 'column', padding: 20}}>
                        <h1 style={{ marginLeft:25}} >{images.title}</h1>
                        <p style={{ fontSize: 24 , marginLeft:25}}>{images.description}</p>
                        <a href={images.link}  target="_blank" style={{color : 'blue', alignSelf:'center' , fontSize:25 , position:'absolute', bottom:0}}>View Site</a>
                    </div>
                </div>
            ))
            }
        </Fade >





    )
}
export default ImageSlider;