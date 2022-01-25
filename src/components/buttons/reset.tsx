type ResetProps = {
    handleReset: () => void;
};

const Reset = ({ handleReset }: ResetProps) => {
    return <button onClick={handleReset}>Reset</button>;
};

export default Reset;
