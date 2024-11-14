import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiPlayLargeLine } from "react-icons/ri";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow } from 'swiper/modules';

const SecondHomeSect = () => {
    return (
        <div className='scnd-home-sect'>
            <div className="container-fluid">
                <div className="scnd-sect-title">
                    <div className="row">
                        <span>SYNOPSIS</span>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                            <div className="scnd-title">
                                <h3>THE TELLING OF TWO INTERTWINING LIVES. MASS <del>DESTRUCTION</del>.</h3>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                            <div className="scnd-title">
                                <p>Cum sociis Theme natoque penatibus et magnis dis part montes,
                                    nascetur ridiculus mus. Aliquam loremante, dapibus in, viverra.
                                    Dolor orem Ipsn vuctor aliquet re ipsum dolor sit amet rem Ipsn
                                    gravida nibh vel velit auct Curabitur ullamcorper ultricies nisi.
                                    Nam eget, etiam mea.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="collection">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="src\assets\images\home-1-port-list-1.jpg" />
                        <button className='slider-btn'><RiPlayLargeLine /></button>
                        <div className="slider-text">
                            <h4>HOTEL ROSE</h4>
                            <p>Huang Jordan / Vietnam</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="src\assets\images\home-1-port-list-2.jpg" />
                        <button className='slider-btn'><RiPlayLargeLine /></button>
                        <div className="slider-text">
                            <h4>BLUE ROOM</h4>
                            <p>Naomi Takeda / Japan</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="src\assets\images\home-1-port-list-3.jpg" />
                        <button className='slider-btn'><RiPlayLargeLine /></button>
                        <div className="slider-text">
                            <h4>BERLIN, TEXAS</h4>
                            <p>Lourdes Kumar / Germany</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="src\assets\images\home-1-port-list-1.jpg" />
                        <button className='slider-btn'><RiPlayLargeLine /></button>
                        <div className="slider-text">
                            <h4>HOTEL ROSE</h4>
                            <p>Huang Jordan / Vietnam</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="src\assets\images\home-1-port-list-2.jpg" />
                        <button className='slider-btn'><RiPlayLargeLine /></button>
                        <div className="slider-text">
                            <h4>BLUE ROOM</h4>
                            <p>Naomi Takeda / Japan</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="src\assets\images\home-1-port-list-3.jpg" />
                        <button className='slider-btn'><RiPlayLargeLine /></button>
                        <div className="slider-text">
                            <h4>BERLIN, TEXAS</h4>
                            <p>Lourdes Kumar / Germany</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div >
        </div>
    );
}

export default SecondHomeSect