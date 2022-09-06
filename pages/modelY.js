import FirstPage from "../components/modleY/firstPage";
import Safety from '../components/model3/safety'
import Utility from "../components/modleY/utility";
import AllWheel from "../components/modleY/allWheel";
import Autopilot from '../components/modelS/autopilot';
import Interior from '../components/model3/interior';
import Specs from "../components/modleY/specs";
import Last from "../components/modleY/last";
import Head from "next/head";


function ModelY() {
    return (
        <div className="bg-white">
            <Head>
                <title>Model Y | Tesla</title>
                <meta name="description" content="Tesla clone by wai" />
                <link rel="icon" href="/tesla-logo-red.png" />
            </Head> 
            <FirstPage />
            <Safety bottom={'low center of gravity'}/>
            <Utility />
            <AllWheel />
            
            <Autopilot />
            <Interior />
            <Specs />
            <Last />
        </div>
    );
}

export default ModelY;