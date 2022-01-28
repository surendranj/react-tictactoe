type RestartProps = {
    handleReset: () => void;
};

const Restart = ({ handleReset }: RestartProps) => {
    return (
        <button
            className="border-0 rounded-xl text-xl px-8 bg-[#EC5656] text-white"
            onClick={handleReset}
        >
            Restart
        </button>
    );
};

export default Restart;
