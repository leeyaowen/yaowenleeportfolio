import { Carousel } from 'react-bootstrap';
import './Home.css';


function Home () {
    return(
        <div>
            <div className='home-div'>
                <Carousel>
                    <Carousel.Item>
                        <img className='w-100' src="https://photos.smugmug.com/photos/i-hv2VfRC/0/aea0fb80/X5/i-hv2VfRC-X5.jpg" alt="cover01"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='w-100' src="https://photos.smugmug.com/photos/i-d2g6TZ8/0/6ecd921f/X5/i-d2g6TZ8-X5.jpg" alt="cover02"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='w-100' src="https://photos.smugmug.com/photos/i-TSLNx7w/0/b0171c38/X5/i-TSLNx7w-X5.jpg" alt="cover03"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='footer'>
                <div className='copyright'>
                    <p>&#169;&nbsp;Yao-Wen Lee 2021</p>
                </div>               
            </div>            
        </div>
    )
}


export default Home;