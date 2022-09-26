import {Accordion} from 'react-bootstrap'

function Enquiry(){
    return (
        <div>
            <br/>
        <h3 style={{color: 'white', fontWeight:'bold'}}> 자주하는 질문</h3>
        <Accordion>
            <Accordion.Item eventKey="0">
            <Accordion.Header> Q.  영상이 재생이 안돼요.
            </Accordion.Header>
            <Accordion.Body>
            </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
            <Accordion.Header>Q. ~~영화도 보고 싶어요.</Accordion.Header>
            <Accordion.Body>
                고객센터의 건의하기에 건의해주시면 검토 후 추가하겠습니다.
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
            <Accordion.Header>Q. 오타 문의</Accordion.Header>
            <Accordion.Body>
            <br/>
            오타가 있다면 고객센터의 건의하기로 건의 부탁드립니다.
            <br/>
            <br/>
            단순 오타를 제외한 영화 정포 페이지의 배우 및 제작진, 줄거리, 기타 정보 수정을 위해서는 저작권자(감독 또는 영화사)가 요청해 주셔야 합니다.
            <br/>
            <br/>
            본인 요청이 아닐 시 수정이 제한될 수 있습니다.
            <br/>
            <br/>
            잘못된 내용이 있다면 아래의 항목을 기입하여 보내주시길 바랍니다.
            <br/>
            <br/>
            검토 후 답변을 드리겠습니다.
            <br/>
            <br/>
            -영화 및 영화인 URL
            <br/>
            -크레딧 정보
            <br/>
            -영화사의 경우 사업자 등록증, 배우, 또는 스탭일 경우 참여사실확인서 및 계약서 첨부
            <br/>
            <br/>
            수정을 요청하신 영화의 저작권자가 아니라면 도움을 드릴 수 없습니다.
            
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
            <Accordion.Header>Q.</Accordion.Header>
            <Accordion.Body>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
            <Accordion.Header>Q.</Accordion.Header>
            <Accordion.Body>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
            <Accordion.Header></Accordion.Header>
            <Accordion.Body>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        
        </div>
        )
}

export default Enquiry;