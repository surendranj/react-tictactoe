import calculateWinner from '../utils/calculateWinner';
import { motion } from 'framer-motion';

const strikeVariant = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: { duration: 0.2, delay: 0.3 },
    },
};
type StrikeProps = {
    squares: (string | null)[];
};
const Strike = ({ squares }: StrikeProps) => {
    const winner = calculateWinner(squares);
    let x1 = '',
        y1 = '',
        x2 = '',
        y2 = '';
    switch (winner?.line.join('')) {
        case '012':
            (x1 = '0%'), (y1 = '17%'), (x2 = '100%'), (y2 = '17%');
            break;
        case '345':
            (x1 = '0%'), (y1 = '50%'), (x2 = '100%'), (y2 = '50%');
            break;
        case '678':
            (x1 = '0%'), (y1 = '83%'), (x2 = '100%'), (y2 = '83%');
            break;
        case '036':
            (x1 = '17%'), (y1 = '0%'), (x2 = '17%'), (y2 = '100%');
            break;
        case '147':
            (x1 = '50%'), (y1 = '0%'), (x2 = '50%'), (y2 = '100%');
            break;
        case '258':
            (x1 = '83%'), (y1 = '0%'), (x2 = '83%'), (y2 = '100%');
            break;
        case '048':
            (x1 = '5%'), (y1 = '5%'), (x2 = '95%'), (y2 = '95%');
            break;
        case '246':
            (x1 = '95%'), (y1 = '5%'), (x2 = '5%'), (y2 = '95%');
            break;
    }
    return (
        <tr className="border-hidden">
            <td>
                <svg height="100%" width="100%" className="absolute top-0 left-0">
                    <motion.line
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        strokeWidth="8"
                        stroke="#B1D695"
                        variants={strikeVariant}
                        initial="hidden"
                        animate="visible"
                    />
                </svg>
            </td>
        </tr>
    );
};

export default Strike;
