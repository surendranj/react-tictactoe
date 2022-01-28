type GameModeProps = {
    value: string;
    handleGameModeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const GameMode = (props: GameModeProps) => {
    return (
        <select
            name="game-mode"
            id="game-mode"
            value={props.value}
            onChange={props.handleGameModeChange}
            className="bg-[#B1D695] text-[#4E6A38] h-8 rounded-xl text-xl px-2"
        >
            <option value="Easy">Easy</option>
            <option value="Normal">Normal</option>
            <option value="Hard">Hard</option>
            <option value="Friend">Play against a friend</option>
        </select>
    );
};

export default GameMode;
