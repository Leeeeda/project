import {Tabs,Tab } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';



function K_Movie (){
    let navigate=useNavigate
    let [tabIndex, setTabIndex] = useState(3);

    return (
        <Tabs
            id="uncontrolled-tab-example"
            className="mb-3"
            defaultActiveKey="comedi"
        >
            <Tab eventKey="comedi" title="가족/코미디" 
            onClick={()=>{navigate('/k-movie/FC'); setTabIndex(0);}}>
            
            </Tab>
            <Tab eventKey="action" title="SF/액션" 
            onClick={()=>{navigate('/k-movie/SA'); setTabIndex(1);}}>
            
            </Tab>
            <Tab eventKey="horror" title="공포/스릴러" 
            onClick={()=>{navigate('/k-movie/HS'); setTabIndex(2);}}>
            
            </Tab>
            <Tab eventKey="romance" title="로멘스" 
            onClick={()=>{navigate('/k-movie/Rom'); setTabIndex(3);}}>
            
            </Tab>
        </Tabs>
        )
}

export default K_Movie