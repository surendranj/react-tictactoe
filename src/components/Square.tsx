import X from './X';
import O from './O';

type SquareProps = {
    value: string | null;
    handleClick: () => void;
};

const Square = (props: SquareProps) => {
    return (
        <td
            className="w-24 h-24 border-8 border-[#B1D695] rounded-2xl cursor-pointer"
            onClick={props.handleClick}
        >
            {props.value === 'X' ? <X /> : props.value === 'O' ? <O /> : ''}
        </td>
    );
};

export default Square;
