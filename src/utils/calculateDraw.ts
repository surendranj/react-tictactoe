const calculateDraw = (squares: (string | null | number)[]) => {
    return squares.every(el => el !== null);
};

export default calculateDraw;
