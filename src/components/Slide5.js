import './Slide5.css';
import img_1 from '../img/carousel/1.jpeg';
import img_2 from '../img/carousel/2.jpeg';
import img_3 from '../img/carousel/3.jpeg';
import img_4 from '../img/carousel/4.jpeg';
import img_5 from '../img/carousel/5.jpeg';
import {openModalImage} from "./modal/modals";
import {nextCarouselCert, prevCarouselCert} from "./carousel/carousel";
import {useEffect} from 'react';

function Slide5() {
    useEffect(() => {
        const carousel = document.getElementById('cert_block');
        const carousel_content = carousel.getElementsByClassName('carousel_content').item(0);
        const right_block = document.getElementById('cert_offset_block');
        carousel.style.width = 841 + right_block.offsetWidth + 'px';
        const imgs = carousel_content.getElementsByTagName("img");
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener('click', openModalImage);
        }
    }, []);

    useEffect(() => {
        const resizeListener = () => {
            const carousel = document.getElementById('cert_block');
            const right_block = document.getElementById('cert_offset_block');
            carousel.style.width = 841 + right_block.offsetWidth + 'px';
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    return (
        <div className="slide5">
            <div className="left_background"></div>
            <div className="content">
                <div className="title">
                    <span className="subtitle">Наши</span>
                    <span className="desc">Сертификаты</span>
                    <div className="carousel_buttons">
                        <a className="previous_button" onClick={prevCarouselCert}></a>
                        <a className="next_button" onClick={nextCarouselCert}></a>
                    </div>
                </div>
                <div id="cert_block" className="carousel_block">
                    <div className="carousel">
                        <ul className="carousel_content">
                            <li>
                                <div>
                                    <img src={img_1} alt=""/>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={img_2} alt=""/>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={img_3} alt=""/>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={img_4} alt=""/>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={img_5} alt=""/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="cert_offset_block" className="right_background"></div>
        </div>
    )
}

export default Slide5;

