import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import ScrollTrigger from 'react-scroll-trigger';

const HeroSection = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <ScrollTrigger onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
                <AnimatePresence>
                    <section className="text-gray-600 body-font bg-white">
                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
                            {
                                visible ?
                                    <motion.div
                                        initial={{ opacity: 0, x: -200 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 2 }}
                                        exit={{ opacity: 0, x: -200 }}
                                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#0000FF] fonts-setup">GREEN POWERED
                                            <br className="hidden lg:inline-block" />SYSTEMS
                                        </h1>
                                        <p className="text-black font-semibold mb-3">
                                            Electrical Services
                                        </p>
                                        <p className="mb-8 leading-relaxed">We are the pioneers of electrical services for both ecological and environmental cause.</p>
                                        <div className="flex justify-center">
                                            <button className=" text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore Now</button>

                                            <div className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg flex-col">
                                                <p className="text-xs">Best in class</p>
                                                <div className='flex'>
                                                    <AiFillStar color='#52FF00' />
                                                    <AiFillStar color='#52FF00' />
                                                    <AiFillStar color='#52FF00' />
                                                    <AiFillStar color='#52FF00' />
                                                    <AiFillStar color='#52FF00' />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                    :
                                    <div
                                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#0000FF] fonts-setup">GREEN POWERED
                                            <br className="hidden lg:inline-block" />SYSTEMS
                                        </h1>
                                        <p className="text-black font-semibold mb-3">
                                            Electrical Services
                                        </p>
                                        <p className="mb-8 leading-relaxed">We are the pioneers of electrical services for both ecological and environmental cause.</p>
                                        <div className="flex justify-center">
                                            <button className=" text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore Now</button>

                                            <div className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg flex-col">
                                                <p className="text-xs">Best in class</p>
                                                <div className='flex'>
                                                    <AiFillStar color='#52FF00' />
                                                    <AiFillStar color='#52FF00' />
                                                    <AiFillStar color='#52FF00' />
                                                    <AiFillStar color='#52FF00' />
                                                    <AiFillStar color='#52FF00' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            }
                            {
                                visible &&
                                <motion.div
                                    initial={{ opacity: 0, x: 200 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1, duration: 2 }}
                                    exit={{ opacity: 0, x: 200 }}
                                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                    <img className="object-cover object-center rounded" alt="hero" src="herobanner.jpg" />
                                </motion.div>
                            }
                        </div>
                    </section>
                </AnimatePresence>
            </ScrollTrigger>
        </>
    );
};

export default HeroSection;