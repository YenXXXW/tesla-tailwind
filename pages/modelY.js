import FirstPage from "../components/modleY/firstPage";
import Safety from '../components/model3/safety'
import Utility from "../components/modleY/utility";
import AllWheel from "../components/modleY/allWheel";
import Autopilot from '../components/modelS/autopilot';
import Interior from '../components/model3/interior';
import Specs from "../components/modleY/specs";
import Last from "../components/modleY/last";


function ModelY() {
    return (
        <div>
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