import {Tabs,Tab } from 'react-bootstrap'


function Ani (){
    return (
        <Tabs
        id="uncontrolled-tab-example"
        className="mb-3"
        defaultActiveKey="kids"
    >
        <Tab eventKey="kids" title="키즈/가족">
        
        </Tab>
        <Tab eventKey="action" title="SF/액션">
        
        </Tab>
        <Tab eventKey="comedi" title="코미디">
        
        </Tab>
        <Tab eventKey="romance" title="로멘스">
        
        </Tab>
    </Tabs>
        )
}

export default Ani