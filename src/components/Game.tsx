import { useState } from 'react';
import Board from './Board';
import GameMode from './GameMode';
import Title from '../components/Title';
import Reset from './buttons/Reset';

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
        <main className="bg-[#08070F] h-screen text-[#B1D695] flex flex-col justify-around py-8 items-center ">
            <Title />
            <Board
                gameMode={gameMode}
                squares={squares}
                setSquares={setSquares}
                xIsNext={xIsNext}
                setxIsNext={setxIsNext}
                gameState={gameState}
                setGameState={setGameState}
            />
            <div className="flex w-96 justify-around">
                <GameMode handleGameModeChange={handleGameModeChange} value={gameMode} />
                <Reset handleReset={handleReset} />
            </div>
        </main>
    );
};

export default Game;
