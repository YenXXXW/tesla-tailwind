import FirstPage from "../components/model3/firstPage";
import Safety from "../components/model3/safety";
import Performance from "../components/model3/performance";
import AllWheel from "../components/model3/allWheel";
import Range from "../components/model3/range";
import Autopilot from '../components/modelS/autopilot'
import Interior from "../components/model3/interior";
import Specs from "../components/model3/specs";
import LastPage from "../components/model3/last";
import Head from "next/head";

function Model3() {

    
    return (
        <div className="bg-white">  
            <Head>
                <title>Model 3 | Tesla</title>
                <meta name="description" content="Tesla clone by wai" />
                <link rel="icon" href="/tesla-logo-red.png" />
            </Head>           
            <FirstPage />
            <Safety bottom={'very low rollover risk'}/>
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