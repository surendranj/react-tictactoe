import { useState } from 'react';
import Board from './Board';
import GameMode from './GameMode';
import Reset from '../components/buttons/reset';

type GameState = {
    gameOver: boolean;
    gameStatus: string;
};
const Game = () => {
    const [gameMode, setGameMode] = useState('Easy');
    const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
    const [xIsNext, setxIsNext] = useState(true);
    const [gameState, setGameState] = useState<GameState>({ gameOver: false, gameStatus: '' });

    const handleGameModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGameMode(event.target.value);
        setSquares(Array(9).fill(null));
        setxIsNext(true);
        setGameState({ gameOver: false, gameStatus: '' });
    };

    const handleReset = () => {
        setSquares(Array(9).fill(null));
        setxIsNext(true);
        setGameState({ gameOver: false, gameStatus: '' });
    };

    return (
        <main className="bg-[#414141] h-screen">
            <GameMode handleGameModeChange={handleGameModeChange} value={gameMode} />
            <Board
                gameMode={gameMode}
                squares={squares}
                setSquares={setSquares}
                xIsNext={xIsNext}
                setxIsNext={setxIsNext}
                gameState={gameState}
                setGameState={setGameState}
            />
            <Reset handleReset={handleReset} />
        </main>
    );
};

export default Game;
