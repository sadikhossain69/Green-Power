import { akshar, inter } from "@/app/fonts";
import { Zoom } from "react-reveal";

const OurServices = () => {
    return (
        <>
            <section className={`${inter.className}`}>
                <div id="services" className="container mx-auto">
                    <div className="text-center">
                        <h5 className="font-semibold">Our Services</h5>
                        <h1 className={`text-[#0000FF] font-semibold
                    text-3xl ${akshar.className}`}>What do we offer</h1>
                        <p>
                            We are the pioneers of electrical services for both ecological and environmental cause.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 px-5 mt-10">
                        <span className="space-y-3 hover:scale-110 duration-300 ease-in-out">
                            <Zoom>
                                <img className="" src="service1.jpg" alt="" />
                                <p className="text-[#0000FF] font-semibold text-center">
                                    Domestic-Commercial – Industrial – Agricultural – Installations
                                </p>
                            </Zoom>
                        </span>
                        <span className="space-y-3 hover:scale-110 duration-300 ease-in-out">
                            <Zoom>
                                <img src="service2.jpg" alt="" />
                                <p className="text-[#0000FF] font-semibold text-center">
                                    Testing & Certification
                                </p>
                            </Zoom>
                        </span>
                        <span className="space-y-3 hover:scale-110 duration-300 ease-in-out">
                            <Zoom>
                                <img src="service3.jpg" alt="" />
                                <p className="text-[#0000FF] font-semibold text-center">
                                    PV Installations
                                </p>
                            </Zoom>
                        </span>
                        <span className="space-y-3 hover:scale-110 duration-300 ease-in-out">
                            <Zoom>
                                <img src="service4.jpg" alt="" />
                                <p className="text-[#0000FF] font-semibold text-center">
                                    EV Charger Installations
                                </p>
                            </Zoom>
                        </span>
                    </div>
                    <span className="space-y-3 grid grid-cols-1 place-items-center md:mt-4 px-5 hover:scale-110 duration-300 ease-in-out">
                        <Zoom>
                            <div>
                                <img className="" src="service5.jpg" alt="" />
                            </div>
                            <p className="text-[#0000FF] font-semibold ">
                                PAT Testing
                            </p>
                        </Zoom>
                    </span>
                </div>
            </section>
        </>
    );
};

export default OurServices;