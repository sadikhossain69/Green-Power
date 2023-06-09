// import Slick from "@ant-design/react-slick";

import { Flip } from "react-reveal";

const LogoSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    return (
        <>
            <section className="container mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
                    <Flip top>
                        <img src="logoSlider1.jpg" alt="" />
                    </Flip>
                    <Flip top>
                        <img src="logoSlider2.jpg" alt="" />
                    </Flip>
                    <Flip top>
                        <img src="logoSlider3.jpg" alt="" />
                    </Flip>
                    <Flip top>
                        <img src="logoSlider4.jpg" alt="" />
                    </Flip>
                </div>
            </section>
        </>
    );
};

export default LogoSlider;