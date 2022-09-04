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

function SolarPanels() {
    return (
        <div>
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