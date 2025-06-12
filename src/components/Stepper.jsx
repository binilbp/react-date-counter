
const Stepper =({text, steps, setSteps})=>{

    function handleDecrement() {
        if (steps > 1)
        setSteps((steps) => steps - 1);
    };

    function handleIncrement () {
        setSteps((steps) => steps + 1);
    }

    return (
        <div className="flex justify-around items-center gap-5">
            <button className="text-2xl font-bold bg-neutral-900 h-15 w-15 rounded-full "
                onClick={handleDecrement}
            >
                -
            </button> 

            <div className="text-1.5xl rounded-md font-mono font-extrabold text-center w-30 py-2 text-white inset-shadow-sm/80 ">{text}: {steps}</div>
            <button 
                className="text-2xl font-bold bg-neutral-900 h-15 w-15 rounded-full "
                onClick={handleIncrement}
            >
                
                +
            </button> 
        </div>);
};

export default Stepper;