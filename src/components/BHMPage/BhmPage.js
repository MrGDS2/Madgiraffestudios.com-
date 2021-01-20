import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import testimg from '../../Images/aboutPage/photoshoot/brandon_shoot.jpg';
import Paint1 from './LiberteNoire/Paintings/Paint1/Paint1';
import Paint2 from './LiberteNoire/Paintings/Paint2/Paint2';
import Paint3 from './LiberteNoire/Paintings/Paint3/Paint3';
import Paint4 from './LiberteNoire/Paintings/Paint4/Paint4';
import Paint5 from './LiberteNoire/Paintings/Paint5/Paint5';
import Paint6 from './LiberteNoire/Paintings/Paint6/Paint6';
import Paint7 from './LiberteNoire/Paintings/Paint7/Paint7';
import Paint8 from './LiberteNoire/Paintings/Paint8/Paint8';
import Paint9 from './LiberteNoire/Paintings/Paint9/Paint9';
import Paint10 from './LiberteNoire/Paintings/Paint10/Paint10';


const BhmPage = () => {



    return (
        <React.Fragment>


            <Carousel>
                <div>
                    {/*photo 1*/}
                    <Paint1 />
                </div>

                {/*photo 2 */}
                <div>
                    <Paint2 />
                </div>

                {/* photo 3 */}
                <div >
                    <Paint3 />
                </div>

                {/* photo 4 */}
                <div >
                    <Paint4 />
                </div>
                {/* photo 5 */}
                <div>
                    <Paint5 />
                </div>
                {/* photo 6 */}
                <div>
                    <Paint6 />
                </div>
                {/* photo 7 */}
                <div>
                    <Paint7 />
                </div>
                {/* photo 8 */}
                <div>
                    <Paint8 />
                </div>
                {/* photo 9 */}
                <div>
                    <Paint9 />
                </div>
                {/* photo 10 */}
                <div>
                    <Paint10 />
                </div>
            </Carousel>

        </React.Fragment>

    )
}

export default BhmPage;