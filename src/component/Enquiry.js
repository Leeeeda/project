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
                <br/>
            영화의 예고편 영상이 정상적으로 재생되지 않으면, 아래의 사항들을 점검해 주세요.
            <br/>
            <br/>
            <strong>1. 유튜브의 동영상 재생이 가능한지 확인</strong>
            <br/>
            <br/>
            문제가 발생한다면, Internet Explorer의 메뉴 중, 도구 > 인터넷 옵션 > 보안 탭 > 제한된 사이트에서 MovieIntro가 들어간 웹사이트 주소를 모두 제거합니다.
            <br/>
            <br/>
            동영상 플레이어가 보이는지 확인 후에도 문제가 발생하면 아래 단계를 진행하세요.
            <br/>
            <br/>
            <strong> 2. Chrome 브라우저 재설치</strong>
            <br/>
            <br/>
            <a href='https://www.google.com/intl/ko/chrome/' target='_blank'>▶ Chrome 설치 페이지 바로가기</a>
            <br/>
            <br/>
            Chrome 브라우저에서 동영상이 정상적으로 재생되나, Internet Explorer에서만 문제가 발생한다면, 기존 Internet Explorer를 제거한 후 재설치합니다.
            <br/>
            안내된 내용으로 해결되지 않았다면, 아래 링크를 클릭해 문의 바랍니다.
            <br/>
            <br/>
            <a href='/customer_service'>▶ 문의 접수 바로가기</a>
            <br/>
            <br/>
            </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
            <Accordion.Header>Q. 다른영화도 보고 싶어요.</Accordion.Header>
            <Accordion.Body>
            <br/>
                고객센터의 건의하기에 건의해주시면 검토 후 추가하겠습니다.
                <br/><br/>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
            <Accordion.Header>Q. 오타 및 내용수정 문의</Accordion.Header>
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
            <br/>
            <br/>
            
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
            <Accordion.Header>Q.MovieIntro 영화 정보 사용 방법</Accordion.Header>
            <Accordion.Body>
                <br/>
                MovieIntro 에 등록된 , 포스터, 예고편, 줄거리 등의 저작권은 영화사에 있습니다.
                <br/>
                <br/>
                유통을 담당하고 있는 MovieIntro에서 사용을 승인할 수 없습니다.
                <br/>
                <br/>
                해당 정보 사용을 위해서는 1차 저작권자인 영화사로 문의하시길 바랍니다.
                <br/>
                <br/>
                홍보용으로 공식 배포된 포스터, 스틸도 영화사로 문의해 주셔야 합니다.
                <br/>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
            <Accordion.Header>Q.신규 영화 및 예고편 등록 방법</Accordion.Header>
            <Accordion.Body>

                <br/>
                <br/>
            1. 신규 영화 등록
            <br/>
            <br/>
            아래 조건 중, 최소 1가지 이상 항목에 해당해야 등록이 가능합니다.
            <br/>
            <br/>
            1) 국내에서 정식 극장 개봉하는 영화 
            <br/>
            - 영화진흥위원회 / 영상물등급위원회에서 확인되어야 합니다.
            <br/>
            2) 영화제 DB에 등록된 출품작 or 영화진흥위원회 DB에 등록된 영화제 출품 영화(2017-06-01~)
            <br/>
            - 영화진흥위원회 정보에 등록된 영화제에서 확인된다면, 영화제 홈페이지 내 출품작 정보가 확인되는 URL을 보내주셔야 합니다.
            <br/>
            <br/>
            2. 영화 예고편 등록 
            <br/>
            예고편의 경우 아래의 3가지 항목이 만족한다면, 메일로 보내주시길 바랍니다.
            <br/>
            <br/>
            1) '영화 본편이 포함된 영상'의 경우 영상물등급위원회 심의 후 심의필증 필수로 전달 
            <br/>
            2) 초기 등록 시 고화질 영상으로 등록하실 것을 권장하며, 1920x1080 사이즈의 파일을 첨부
            <br/>
            <br/>
            <br/>
            
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        
        </div>
        )
}

export default Enquiry;