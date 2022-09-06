import Test from '../components/modelS/test'
import Design from '../components/solarPannels/design';
import Experience from '../components/solarPannels/experience';
import FirstPage from '../components/solarPannels/firstPage';
import Last from '../components/solarPannels/last';
import PowerOn from '../components/solarPannels/powerOn';
import PowerWall from '../components/solarPannels/powerWall';
import Savings from '../components/solarPannels/savings';
import Specs from '../components/solarPannels/specs';
import Efficiency from "../components/solarRoof/efficiency";
import Head from 'next/head';

function SolarPanels() {
    return (
        <div className='bg-white'>
            <Head>
                <title>Solar Panels | Tesla</title>
                <meta name="description" content="Tesla clone by wai" />
                <link rel="icon" href="/tesla-logo-red.png" />
            </Head> 
            <FirstPage />
            <Savings />
            <Design />
            <PowerWall />
            <PowerOn />
            <Efficiency />
            <Experience />
            <Specs />
            <Last />            
        </div>
    );
}

export default SolarPanels;