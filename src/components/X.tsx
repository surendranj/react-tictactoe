import { motion } from 'framer-motion';

const xVariant = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: { duration: 0.2 },
    },
};
const X = () => {
    return (
        <svg width="100%" height="100%">
            <motion.line
                x1="20%"
                y1="20%"
                x2="80%"
                y2="80%"
                strokeWidth="10%"
                stroke="#EC5656"
                variants={xVariant}
                initial="hidden"
                animate="visible"
            />
            <motion.line
                x1="80%"
                y1="20%"
                x2="20%"
                y2="80%"
                strokeWidth="10%"
                stroke="#EC5656"
                variants={xVariant}
                initial="hidden"
                animate="visible"
            />
        </svg>
    );
};

export default X;
