import {Tabs,Tab } from 'react-bootstrap'


function K_Movie (){
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Home">
            
            </Tab>
            <Tab eventKey="profile" title="Profile">
            
            </Tab>
            <Tab eventKey="contact" title="Contact">
            
            </Tab>
        </Tabs>
        )
}

export default K_Movie