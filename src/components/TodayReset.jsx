const TodayReset = ({setCounts, setSteps})=> {
    function handleReset(){
        setCounts(0)
        setSteps(1)
    };
    return (
        <button 
            className="p-5 bg-amber-300 rounded-md shadow-lg/60 text-amber-600 font-semibold "
            onClick={handleReset}
        >
        TODAY
        </button>
    );
};

export default TodayReset;
