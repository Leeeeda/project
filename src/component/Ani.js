import {Tabs,Tab } from 'react-bootstrap'


function Ani (){
    return (
        <Tabs
            id="uncontrolled-tab-example"
            className="mb-3"
            defaultActiveKey="comedi"
        >
            <Tab eventKey="comedi" title="코미디/가족" >
            <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 온가족이 모여서 보기 좋은 만화</p>
            <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 마음이 따뜻해지는 영화</p>
            <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 흥미진진! 눈을 못떼는 영화</p>
            <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 지금 뜨는 콘텐츠</p>
            </Tab>

            <Tab eventKey="series" title="극장판">
            <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 오늘의 발견!</p>
            <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 귀여운 등장인물, 흥미진진한 스토리!</p>
            <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 인기 있는 컨텐츠</p>
            <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 에디터 추천 영화</p>
            
            </Tab>
            
            <Tab eventKey="romance" title="로맨스">
            <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 로맨틱한 코미디 영화</p>
            <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 보기만 해도 마음이 따뜻해지는 영화</p>
            <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 두근두근 설레는 로맨스 영화</p>
            <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 정주행 추천 영화</p>
            </Tab>

        </Tabs>
        )
}

export default Ani