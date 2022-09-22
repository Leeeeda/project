import {Tabs,Tab } from 'react-bootstrap'


function F_Movie (){
    return (
        <Tabs
        id="uncontrolled-tab-example"
        className="mb-3"
        defaultActiveKey="comedi"
    >
        <Tab eventKey="comedi" title="가족/코미디">
        
        </Tab>
        <Tab eventKey="action" title="SF/액션">
        
        </Tab>
        <Tab eventKey="horror" title="공포/스릴러">
        
        </Tab>
        <Tab eventKey="romance" title="로멘스">
        
        </Tab>
    </Tabs>
        )
}

export default F_Movie