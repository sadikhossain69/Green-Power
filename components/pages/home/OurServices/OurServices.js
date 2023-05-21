const OurServices = () => {
    return (
        <>
            <section className="container mx-auto">
                <div className="text-center">
                    <h5 className="font-semibold">Our Services</h5>
                    <h1 className="text-[#0000FF] font-semibold
                    text-3xl">What do we offer</h1>
                    <p>
                        We are the pioneers of electrical services for both ecological and environmental cause.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 px-5 mt-10">
                    <span className="space-y-3">
                        <img src="service1.jpg" alt="" />
                        <p className="text-[#0000FF] font-semibold text-center">
                            Domestic-Commercial – Industrial – Agricultural – Installations
                        </p>
                    </span>
                    <span className="space-y-3">
                        <img src="service2.jpg" alt="" />
                        <p className="text-[#0000FF] font-semibold text-center">
                            Testing & Certification
                        </p>
                    </span>
                    <span className="space-y-3">
                        <img src="service3.jpg" alt="" />
                        <p className="text-[#0000FF] font-semibold text-center">
                            PV Installations
                        </p>
                    </span>
                    <span className="space-y-3">
                        <img src="service4.jpg" alt="" />
                        <p className="text-[#0000FF] font-semibold text-center">
                            EV Charger Installations
                        </p>
                    </span>
                </div>
                <span className="space-y-3 grid grid-cols-1 place-items-center md:mt-4 px-5">
                    <div>
                        <img className="" src="service5.jpg" alt="" />
                    </div>
                    <p className="text-[#0000FF] font-semibold ">
                        PAT Testing
                    </p>
                </span>
            </section>
        </>
    );
};

export default OurServices;