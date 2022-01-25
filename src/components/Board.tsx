import { useEffect } from 'react';
import Square from './Square';
import calculateWinner from '../utils/calculateWinner';
import calculateDraw from '../utils/calculateDraw';
import Strike from './Strike';

const Minimax = require('tic-tac-toe-minimax');
const { ComputerMove } = Minimax.default;

type GameState = {
    gameOver: boolean;
    gameStatus: string;
};
type BoardProps = {
    gameMode: string;
    squares: (string | null)[];
    setSquares: (squares: (string | null)[]) => void;
    xIsNext: boolean;
    setxIsNext: (val: boolean) => void;
    gameState: GameState;
    setGameState: (state: GameState | ((prevState: GameState) => GameState)) => void;
};

const Board = ({
    gameMode,
    squares,
    setSquares,
    xIsNext,
    setxIsNext,
    gameState,
    setGameState,
}: BoardProps) => {
    const handleClick = (i: number) => {
        const newSquares = [...squares];
        if (calculateWinner(squares) || calculateDraw(squares) || squares[i]) {
            return;
        }

        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setxIsNext(!xIsNext);
    };
    useEffect(() => {
        const winner = calculateWinner(squares);
        const draw = calculateDraw(squares);
        if (winner) {
            setGameState(gameState => {
                return { ...gameState, gameOver: true, gameStatus: 'Winner: ' + winner.winner };
            });
        } else if (draw) {
            setGameState(gameState => {
                return { ...gameState, gameOver: true, gameStatus: 'Draw' };
            });
        } else {
            if (gameMode !== 'Friend' && !xIsNext) {
                const symbols = { huPlayer: 'X', aiPlayer: 'O' };
                const board = [...squares].map((square, idx) => {
                    if (typeof square !== 'string') return idx;
                    else return square;
                });
                const AIchoice = ComputerMove(board, symbols, gameMode);
                setSquares(
                    squares.map((square, idx) => {
                        if (idx === AIchoice) {
                            return 'O';
                        } else {
                            return square;
                        }
                    })
                );
                setxIsNext(true);
            }
            setGameState(gameState => {
                return { ...gameState, gameStatus: 'Next player: ' + (xIsNext ? 'X' : 'O') };
            });
        }
    }, [gameMode, setGameState, setSquares, setxIsNext, squares, xIsNext]);

    const renderSquare = (i: number) => {
        return <Square value={squares[i]} handleClick={() => handleClick(i)} />;
    };

    return (
        <section>
            <table className="border-hidden">
                <thead className="border-hidden">
                    <tr>
                        <th>{gameState.gameStatus}</th>
                    </tr>
                </thead>
                <tbody className="relative">
                    <tr>
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </tr>
                    <tr>
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </tr>
                    <tr>
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </tr>
                    {calculateWinner(squares) && <Strike squares={squares} />}
                </tbody>
            </table>
        </section>
    );
};

export default Board;
