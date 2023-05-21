const WhatWeDo = () => {
    return (
        <>
            <section className=" container mx-auto">
                <div>
                    <p className="text-[#0000FF] text-3xl text-center font-semibold">What do we do?!</p>
                </div>
                <div className=" relative flex flex-col justify-between items-center lg:flex-row py-10">
                    <img src="whatWeDoLeft.jpg" alt="" />
                    <p className="text-[#0000FF] font-semibold text-center text-6xl">
                        Give us a call to get started
                    </p>
                    <div className="hidden xl:block absolute bottom-28 left-[35%] w-96 border-b-2 border-[#52FF00]"></div>
                    <img src="whatWeDoRight.jpg" alt="" />
                </div>
            </section>
        </>
    );
};

export default WhatWeDo;