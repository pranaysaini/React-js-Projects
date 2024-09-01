import Layout from "./Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation } from 'swiper/modules';
import "swiper/css"


const Home = () => {

    return (
        <Layout>
            <div>
                <header>
                    <Swiper
                        slidesPerView={1}
                        navigation={true}
                        >
                        <SwiperSlide><img src="/images/Banner/a.png" /></SwiperSlide>
                        <SwiperSlide><img src="/images/Banner/b.png" /></SwiperSlide>
                        <SwiperSlide><img src="/images/Banner/c.png" /></SwiperSlide>
                        <SwiperSlide><img src="/images/Banner/d.png" /></SwiperSlide>
                    </Swiper>
                </header>
            </div>
        </Layout>
    )
}
export default Home