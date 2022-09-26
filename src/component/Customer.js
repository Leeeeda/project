import {Tabs, Tab,Accordion} from 'react-bootstrap'

function Customer() {
    return (
        <Tabs
            id="controlled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="notice" title="공지사항">
            
    <Accordion  flush>
    <Accordion.Item eventKey="0">
        <Accordion.Header>영화 신규 업데이트 22.09.26</Accordion.Header>
        <Accordion.Body>
        -공조
        <br/>
        -헌트
        <br/>
        -한산
        </Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
            </Tab>
            <Tab eventKey="error" title="오류 발생">
            
            </Tab>
            <Tab eventKey="help" title="문의하기">
        
            </Tab>
        </Tabs>
        );
}

export default Customer