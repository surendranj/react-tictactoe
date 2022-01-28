type ResetProps = {
    handleReset: () => void;
};

const Reset = ({ handleReset }: ResetProps) => {
    return (
        <button
            className="border-0 rounded-xl text-xl px-8 bg-[#EC5656] text-white"
            onClick={handleReset}
        >
            Restart
        </button>
    );
};

export default Reset;
