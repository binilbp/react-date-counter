import { useState } from "react";
import Counter from "./Counter";
import Stepper from "./Stepper";
import DateDisplay from "./DateDisplay";
import TodayReset from "./TodayReset";

export default function DateCounter () {
    const [counts, setCounts] = useState(0);
    const [steps, setSteps] = useState(1);
    

    return (
        <section className="flex flex-col items-center justify-center gap-10"> 
            <DateDisplay counts={counts} />
            <Stepper text="Steps" steps={steps} setSteps={setSteps}/>
            <Counter text="Count" counts={counts} steps={steps} setCounts={setCounts}/>
            <TodayReset setSteps={setSteps} setCounts={setCounts}/>
        </section>
    );

}

