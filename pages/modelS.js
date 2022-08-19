import Navbar from "../components/navbar";
import Head from 'next/head'
import Image from "next/image";
import VideoSelect from "../components/modelS/videoSelect";
import StayConnected from "../components/modelS/stayconnected";
import BeyondLudicrious from "../components/modelS/beyondLudicrous";
import ElectricPowerTrain from "../components/modelS/electricPowertrain";
import Exterior from "../components/modelS/exterior";
import Rentless from "../components/modelS/rentless";
import Range from "../components/modelS/range";
import Autopilot from "../components/modelS/autopilot";
import Specs from "../components/modelS/spec";
import Last from "../components/modelS/last";
import Safety from "../components/modelS/safety";
import Test from "../components/modelS/test";

function ModelS() {
    return (
        <div className="w-full">
            <Head>
                <title>Model S | Tesla</title>
                <meta name="description" content="Tesla clone by wai" />
                <link rel="icon" href="/tesla-logo-red.png" />
            </Head>
            <Navbar fill='black' position={'absolute'}/>                       
        </div>
    );
}

export default ModelS;