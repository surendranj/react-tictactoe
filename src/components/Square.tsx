type SquareProps = {
    value: string | null;
    handleClick: () => void;
};

const Square = (props: SquareProps) => {
    return (
        <td
            className="w-20 h-20 text-4xl border border-black text-center"
            onClick={props.handleClick}
        >
            <svg width="100%" height="100%">
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central">
                    {props.value}
                </text>
            </svg>
        </td>
    );
};

export default Square;
