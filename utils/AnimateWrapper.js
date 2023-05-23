import { motion } from 'framer-motion'

const AnimateWrapper = ({ children, x, y, duration, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: x, y: y }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: duration, delay: delay }}
            exit={{ opacity: 0, x: x, y: y }}
        >
            {children}
        </motion.div>
    );
};

export default AnimateWrapper;