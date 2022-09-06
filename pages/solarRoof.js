import Design from "../components/solarRoof/design";
import Durability from "../components/solarRoof/durability";
import Efficiency from "../components/solarRoof/efficiency";
import Installation from "../components/solarRoof/installation";
import EnergyStorage from "../components/solarRoof/energyStorage";
import FirstPage from "../components/solarRoof/firstPage";
import Control from "../components/solarRoof/control";
import Value from "../components/solarRoof/value";
import Specs from "../components/solarRoof/specs";
import Last from "../components/solarRoof/last";
import Head from "next/head";

function SolarRoof() {
    return (
        <div className="bg-white">
            <Head>
                <title>Solar Roof | Tesla</title>
                <meta name="description" content="Tesla clone by wai" />
                <link rel="icon" href="/tesla-logo-red.png" />
            </Head> 
            <FirstPage />
            <Design />
            <EnergyStorage />
            <Durability />
            <Installation />
            <Efficiency />            
            <Control />
            <Value />
            <Specs />
            <Last />
        </div>
    );
}

export default SolarRoof;