
const Stepper =({text, steps, setSteps})=>{

    function handleDecrement() {
        if (steps > 1)
        setSteps((steps) => steps - 1);
    };

    function handleIncrement () {
        setSteps((steps) => steps + 1);
    }

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-mono font-extrabold text-center w-15 py-2 text-black bg-violet-400 inset-shadow-sm/80 ">{steps}</div>

        <div className="flex justify-around items-center gap-5">
            <button className="text-2xl font-bold bg-neutral-900 h-15 w-15 rounded-full "
                onClick={handleDecrement}
            >
                -
            </button> 
            <span className="text-2xl  p-5 text-yellow-400">
                {text}
            </span>
            <button 
                className="text-2xl font-bold bg-neutral-900 h-15 w-15 rounded-full "
                onClick={handleIncrement}
            >
                
                +
            </button> 
        </div>
    </div>);
};

export default Stepper;