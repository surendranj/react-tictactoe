import { motion } from 'framer-motion';

const oVariant = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: { duration: 0.2, delay: 0.3 },
    },
};
const O = () => {
    return (
        <svg width="100%" height="100%">
            <motion.circle
                cx="50%"
                cy="50%"
                r="30%"
                strokeWidth="10%"
                stroke="#A8A798"
                fill="none"
                variants={oVariant}
                initial="hidden"
                animate="visible"
            />
        </svg>
    );
};

export default O;
