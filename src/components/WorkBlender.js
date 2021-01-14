import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import './page.css';



function Blender () {
    return (
        <div className='blender'>
            <ScrollUpButton />
            <div className='blender-container'>
                <img className='d-block w-100 mx-auto' src="https://photos.smugmug.com/photos/i-wgs5BR2/0/35b2923f/X3/i-wgs5BR2-X3.png" alt="Blender"/>
                <img className='d-block w-100 mx-auto' src="https://photos.smugmug.com/photos/i-VTpH5Lz/0/61f78eed/X3/i-VTpH5Lz-X3.jpg" alt="Blender"/>
                <img className='d-block w-100 mx-auto' src="https://photos.smugmug.com/photos/i-LRKcnM2/0/45e42768/X3/i-LRKcnM2-X3.png" alt="Blender"/>
                <iframe src="https://www.youtube.com/embed/rEbBIHfG2m4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='youtube'></iframe>  
            </div>
            <div className='footer'>
                <div className='copyright'>
                    <p>&#169;&nbsp;Yao-Wen Lee 2021</p>
                </div>               
            </div>
        </div>
    )
}


export default Blender;