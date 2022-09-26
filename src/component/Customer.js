import {Tabs, Tab,Accordion,Form,Button} from 'react-bootstrap'

function Customer() {
    
    return (
        <Tabs
            id="controlled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="notice" title="공지사항">
            
    <Accordion style={{topMargin:'20px',width:'900px'}} flush>
    <Accordion.Item eventKey="0">
        <Accordion.Header>영화 신규 업데이트 22.09.26</Accordion.Header>
        <Accordion.Body>
        <br/>
        -공조 : 업데이트 완료
        <br/>
        <br/>
        -헌트 : 업데이트 완료
        <br/>
        <br/>
        -한산 : 업데이트 완료
        <br/>
        <br/>
        </Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item eventKey="1">
        <Accordion.Header>신규 콘텐츠 등록 예정 22.09.27</Accordion.Header>
        <Accordion.Body>
        <br/>
            -정직한 후보 2 : 22.09.28 개봉예정
            <br/>
            <br/>
            -인생은 아름다워 : 22.09.28 개봉예정
            <br/>
            <br/>
            -극장판 헬로카봇: 수상한 마술단의 비밀 : 22.09.28 개봉예정
            <br/>
            <br/>
            -극장판 짱구는 못말려: 수수께끼! 꽃피는 천하 떡잎 학교 : 22.09.28 개봉예정
            <br/>
            <br/>
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
            </Tab>
            <Tab eventKey="error" title="오류 발생" style={{color:'white'}}>
            <p className='p'>서비스에 제안하실 의견을 접수해 주세요</p>
            <br/>
            제안주신 내용에 대해 별도의 결과를 안내해 드리지 않습니다.
            <br/>
            답변을 원하는 요청사항은 공지사항을 참고해 주세요
            <br/>
            보내주신 의견은 서비스 개선을 위해 소중히 활용하고 있습니다.
            <br/>
            <br/>
            <br/>

            <Form style={{color:'white'}} className='formPosition'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>이메일 주소</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <br/>
        <Form.Label>오류 문의</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <br/>
        개인정보 수집 동의
        수집하는 개인정보 항목: 이메일 주소
        <br/>
        작성해 주시는 개인정보는 문의 접수 및 고객 불만 해결을 위해 3년간 보관됩니다.
        <br/>
        이용자는 본 동의를 거부할 수 있으나, 미동의 시 문의 접수가 불가능 합니다.
        <br/>
        <br/>
        <Button as="input" type="submit" style={{backgroundColor:'rgb(83, 52, 131)',borderColor:'rgb(83, 52, 131)'}} value="제출하기" />
            </Form>
            </Tab>



            <Tab eventKey="help" title="문의하기">
            <Form style={{color:'white'}} className='formPosition'> 
            <p className='p'>서비스에 제안하실 의견을 접수해 주세요</p>
            <br/>
            제안주신 내용에 대해 별도의 결과를 안내해 드리지 않습니다.
            <br/>
            답변을 원하는 요청사항은 공지사항을 참고해 주세요
            <br/>
            보내주신 의견은 서비스 개선을 위해 소중히 활용하고 있습니다.
            <br/>
            <br/>
            <br/>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>이메일 주소</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <br/>
        <Form.Label>오류 문의</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <br/>
        개인정보 수집 동의
        수집하는 개인정보 항목: 이메일 주소
        <br/>
        작성해 주시는 개인정보는 문의 접수 및 고객 불만 해결을 위해 3년간 보관됩니다.
        <br/>
        이용자는 본 동의를 거부할 수 있으나, 미동의 시 문의 접수가 불가능 합니다.
        <br/>
        <br/>
        <Button as="input" type="submit" style={{backgroundColor:'rgb(83, 52, 131)',borderColor:'rgb(83, 52, 131)'}}  value="제출하기" />{' '}
            </Form>
            </Tab>
        </Tabs>
        );
}

export default Customer