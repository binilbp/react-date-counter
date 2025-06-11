const DateDisplay = ({counts}) => {
    const date = new Date();
    date.setDate(date.getDate()+ counts)
    const ddmmyyyy= date.toLocaleDateString('en-US', {
        weekday: 'short',  // e.g., 'Wed'
        day: '2-digit',    // e.g., '12'
        month: 'short',    // e.g., 'Jun'
        year: 'numeric',   // e.g., '2025'
    });
    return(
        <p 
        className="bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 via-purple-500 to-pink-500 m-5 text-4xl font-bold mb-10 text-center "
        >{ddmmyyyy}</p>
    );
};

export default DateDisplay;