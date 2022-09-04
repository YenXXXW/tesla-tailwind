import FirstPage from "../components/model3/firstPage";
import Safety from "../components/model3/safety";
import Test from "../components/modelS/test";
import Performance from "../components/model3/performance";
import AllWheel from "../components/model3/allWheel";
import Range from "../components/model3/range";
import Autopilot from '../components/modelS/autopilot'
import Interior from "../components/model3/interior";
import Specs from "../components/model3/specs";
import LastPage from "../components/model3/last";

import Link from "next/link"; 
import { useEffect  , useState } from "react";

function Model3() {

    
    return (
        <div className="">            
            <FirstPage />
            <Safety bottom={'very low rollover risk'}/>
            <Test />
            <Performance />
            <AllWheel />
            <Range />
            <Autopilot />
            <Interior />
            <Specs />
            <LastPage />
        </div>
        
    );
}

export default Model3;