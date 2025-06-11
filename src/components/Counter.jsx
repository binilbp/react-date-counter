const Counter =({text, steps, counts, setCounts})=>{

    function handleIncrement(){
        setCounts((counts)=>counts + steps);
    };

    function handleDecrement(){
        setCounts((counts)=>counts - steps);
    };

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-mono font-extrabold text-center w-15 py-2 text-black bg-cyan-300 inset-shadow-sm/80 ">{counts}</div>


        <div className="flex justify-around items-center gap-5">
            <button 
                className="text-2xl font-bold bg-neutral-900 h-15 w-15 rounded-full "
                onClick={handleDecrement}
            >
                -
            </button> 
            <span 
                className="text-2xl  p-5 text-yellow-400"
            >
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

export default Counter;