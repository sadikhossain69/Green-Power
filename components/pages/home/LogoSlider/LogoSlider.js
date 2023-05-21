// import Slick from "@ant-design/react-slick";

const LogoSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 5000,
    }

    return (
        <>
            <section className="container mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
                    <img src="logoSlider1.jpg" alt="" />
                    <img src="logoSlider2.jpg" alt="" />
                    <img src="logoSlider3.jpg" alt="" />
                    <img src="logoSlider4.jpg" alt="" />
                </div>
            </section>
        </>
    );
};

export default LogoSlider;