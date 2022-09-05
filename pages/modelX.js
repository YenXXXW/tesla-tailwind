import AllNewInterior from "../components/modelX/allNewInterior";
import BeyondLudicrious from "../components/modelX/beyond";
import ElectricPowerTrain from "../components/modelX/eletricPowertrain";
import Exterior from "../components/modelX/exterior";
import FirstPage from "../components/modelX/firstPage";
import ImageSelect from "../components/modelX/imageSelect";
import NewWeels from "../components/modelX/newWheels";
import Range from "../components/modelX/range";
import StayConnected from "../components/modelX/stayConnected";
import Utility from "../components/modelX/utility";
import Freedom from "../components/modelS/freedom"
import Features from "../components/modelS/features"
import Specs from "../components/modelX/specs";
import Last from "../components/modelX/last";

function ModelX() {
    return (
        <div>
            <FirstPage />
            <AllNewInterior />
            <ImageSelect />
            <StayConnected />
            <BeyondLudicrious />
            
            <Utility />
            <Exterior />
            <NewWeels />
            <Range />
            <Freedom />
            <Features />
            <Specs />
            <Last />
        </div>
    );
}

export default ModelX;