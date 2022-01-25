type GameModeProps = {
    value: string;
    handleGameModeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const GameMode = (props: GameModeProps) => {
    return (
        <>
            <label htmlFor="game-mode">Game Mode:</label>
            <select
                name="game-mode"
                id="game-mode"
                value={props.value}
                onChange={props.handleGameModeChange}
            >
                <option value="Easy">Easy</option>
                <option value="Normal">Normal</option>
                <option value="Hard">Hard</option>
                <option value="Friend">Play against a friend</option>
            </select>
        </>
    );
};

export default GameMode;
