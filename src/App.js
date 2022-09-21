import logo from './logo.svg';
import './App.css';
import {Nav, Navbar,Container,Button,Form,Carousel,Row,Col,Card} from 'react-bootstrap';
import {useState} from 'react';
import {Route, Routes,useNavigate,Link} from 'react-router-dom';
import MovieCard1 from './component/MovieCard.js';
import MovieInfo from './component/MovieInfo.js';
import MovieData from './component/MovieData'
import K_Movie from './component/K-movie';


function App({movie}) {
  let navigate = useNavigate();
  let [movies, setMovies] = useState(
    [
      {
        id: 'mv001',
      itemName : '공조2 : 인터네셔날',
      contentP : '감독: 이석훈 \n 출연 : 현빈,유해진,윤아',
      contentS : "공조 이즈 백! 이번엔 삼각 공조다! 남한으로 숨어든 글로벌 범죄 조직을 잡기 위해 새로운 공조 수사에 투입된 북한 형사 ‘림철령’(현빈). 수사 중의 실수로 사이버수사대로 전출됐던 남한 형사 ‘강진태’(유해진)는 광수대 복귀를 위해 모두가 기피하는 ‘철령’의 파트너를 자청한다.",
      imgPath : 'https://movie-phinf.pstatic.net/20220826_188/1661489945659Su2RI_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath : <iframe width="789" height="444" src="https://www.youtube.com/embed/fzUKUfHeIYA" title="3배 더 강력해진 하나의 팀! [공조2: 인터내셔날] 메인 예고편" frameborder="0" allow="autoplay 'src'; fullscreen"></iframe>
      },
      {
        id: 'mv002',
      itemName : '헌트',
      contentP : '감독: 이정재 출연: 이정재,정우성,전혜진',
      contentS : "[조직 내 숨어든 스파이를 색출하라!‘사냥꾼’이 될 것인가, ‘사냥감’이 될 것인가!] 망명을 신청한 북한 고위 관리를 통해 정보를 입수한 안기부 해외팀 ‘박평호’(이정재)와 국내팀 ‘김정도’(정우성)는  조직 내 숨어든 스파이 ‘동림’ 색출 작전을 시작한다.  스파이를 통해 일급 기밀사항들이 유출되어 위기를 맞게 되자  날 선 대립과 경쟁 속, 해외팀과 국내팀은 상대를 용의선상에 올려두고  조사에 박차를 가한다.",
      imgPath : ' https://movie-phinf.pstatic.net/20220805_227/1659685387586PIORG_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath : <iframe width="789" height="444" src="https://www.youtube.com/embed/CSOb8gia_mg" title="[헌트] 공식 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: 'mv003',
      itemName : '한산: 용의 출현',
      contentP : '감독: 김한민 출연: 박해일,변요한,안성기',
      contentS : "나라의 운명을 바꿀 압도적 승리의 전투가 시작된다! 1592년 4월, 조선은 임진왜란 발발 후 단 15일 만에 왜군에 한양을 빼앗기며 절체절명의 위기에 놓인다.  조선을 단숨에 점령한 왜군은 명나라로 향하는 야망을 꿈꾸며 대규모 병역을 부산포로 집결시킨다. 1592년 여름, 음력 7월 8일 한산도 앞바다, 압도적인 승리가 필요한 조선의 운명을 건 지상 최고의 해전이 펼쳐진다.",
      imgPath : 'https://movie-phinf.pstatic.net/20220727_209/1658912961873lVd2W_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/GduEtmvwcI0" title="[한산: 용의 출현] 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: 'mv004',
      itemName : '탑건:매버릭',
      contentP : '감독: 조셉 코신스키 출연: 톰 크루즈, 마일즈 텔러, 제니퍼 코넬리',
      contentS : "한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다!",
      imgPath : 'https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/Mrj9XACVJ8U" title="[탑건: 매버릭] 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: 'mv005',
      itemName : '블랙폰',
      contentP : '감독: 스콧 데릭슨 출연: 에단 호크, 메이슨 테임즈,매들린 맥그로',
      contentS : "사라진 아이들, 고장 난 전화기, 죽은 친구들과의 통화. 전화가 울리면 반드시 받을 것",
      imgPath : 'https://movie-phinf.pstatic.net/20220907_295/1662518947849s9ym1_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/OSFfTzwuXKk" title="[블랙폰] 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: 'mv006',
      itemName : '놉',
      contentP : '감독: 조던 필 출연: 다니엘 칼루야, 케케 파머, 스티븐 연',
      contentS : "그것은 우리 위에 있다. 거대하고, 주목받길 원하고, 미쳤다. 나쁜 기적이라는 것도 있을까?",
      imgPath : 'https://movie-phinf.pstatic.net/20220729_1/1659070685587fXfeh_JPEG/movie_image.jpg?type=w480_2',
      videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/JllzxDFhhnI" title="스포일러 주의 [놉] 파이널 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: 'mv007',
      itemName : '알라딘',
      contentP : '감독: 가이 리치 출연: 메나 마수드, 윌 스미스, 나오미 스콧',
      contentS : "머나먼 사막 속 신비의 아그라바 왕국의 시대. 좀도둑 ‘알라딘’은 마법사 ‘자파’의 의뢰로 마법 램프를 찾아 나섰다가 주인에게 세 가지 소원을 들어주는 지니를 만나게 되고, 자스민 공주의 마음을 얻으려다 생각도 못했던 모험에 휘말리게 되는데…",
      imgPath : ' https://movie-phinf.pstatic.net/20190524_104/1558663170174Q2mmw_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/KrM3vS5sy2w" title="[알라딘] 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: 'mv008',
      itemName : '외계+인 1부',
      contentP : '감독: 최동훈 출연: 류준열, 김우빈, 김태리',
      contentS : " 2022년 인간 속에 수감된 외계인 죄수를 쫓는 이들 1391년 고려 말 소문 속의 신검을 차지하려는 도사들 시간의 문이 열리고 모든 것이 바뀌기 시작했다!",
      imgPath : 'https://movie-phinf.pstatic.net/20220708_75/16572722362230AyHS_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/l9288UVTHkA" title="[외계+인] 1부 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
    ]
  )
  return (
  <div className='main'>

    {/* 상단바 영역 */}
    <Navbar collapseOnSelect expand="lg" 
    style={{backgroundColor:'rgb(22, 33, 62)',fontSize:'17px'}} variant="dark">
      <Container>
        <Navbar.Brand href="/" style={{fontSize:'22px',fontWeight:'bold'}}>Movie Intro</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/k-movie')}}>국내 영화</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/f-movie')}}>해외 영화</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/ani')}}>애니메이션</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="검색어를 입력하세요"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{backgroundColor:'black'}}>Search</Button>
          </Form>
      </Container>
    </Navbar>
<Routes>
          <Route path='/' element={<div className='carouselBanner'>
             {/* 배너 부분 */}
    <Carousel  className='carouselBanner' fade>
      <Carousel.Item onClick={()=>{navigate('/movieInfo/mv001')}}>
        <img
          className="d-block w-100"
          src="https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220818_98%2F1660788879314zIlRs_JPEG%2Fmovie_image.jpg"
          height='700px'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>{navigate('/movieInfo/mv002')}}>
        <img
          className="d-block w-100"
          src= 'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220721_170%2F1658386441523viz5t_JPEG%2Fmovie_image.jpg'
          alt="Second slide"
          height='700px'
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>{navigate('/movieInfo/mv008')}}>
        <img
          className="d-block w-100"
          src="https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220720_67%2F16582792149228F3Il_JPEG%2Fmovie_image.jpg"
          alt="Third slide"
          height='700px'
        />
      </Carousel.Item>
    </Carousel> 
    
    {/* 카드 영역 */}
    <Container >
      <br/>
    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 금주 인기 있는 영화</p>
    
      <MovieCard1 movies={movies} id={movies.id}></MovieCard1>
    </Container>
{/* 
    <Container >
      <br/>
    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 온 가족이 보기 좋은 영화</p>
    
      <MovieCard1 movies={movies} id={movies.id}></MovieCard1>
    </Container>

    <Container >
      <br/>
    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 오싹해지는 공포 영화</p>
    
      <MovieCard1 movies={movies} id={movies.id}></MovieCard1>
    </Container>

    <Container >
      <br/>
    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 국내 영화</p>
    
      <MovieCard1 movies={movies} id={movies.id}></MovieCard1>
    </Container> */}
    
          </div>}>
            
            </Route>


          <Route path='/movieInfo/:id' element={<MovieInfo   movies={movies} />} />
          <Route path='/k-movie' element={<K_Movie></K_Movie>}></Route>
            <Route path='FC'></Route>
            <Route path='SA'></Route>
            <Route path='HS'></Route>
            <Route path='Rom'></Route>
          <Route path='/f-movie'></Route>
            <Route path='FC'></Route>
            <Route path='SA'></Route>
            <Route path='HS'></Route>
            <Route path='Rom'></Route>
          <Route path='/ani'></Route>
            <Route path='KF'></Route>
            <Route path='SA'></Route>
            <Route path='Com'></Route>
            <Route path='Rom'></Route>
            {/* 나중에 탭으로 바꾸기 */}

          <Route path='*' element={<div>404 Not Found</div>} />
        </Routes>
 
    


   
    {/* Routes */}
    
    
{/* footer 영역 */}
<footer className='footer'>
  <br/>
    <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">전체 페이지</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">고객센터</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">개인정보처리방침</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
        </Nav>
        <br/>
        <p className='font-style'>본 콘텐츠의 저작권은 저작권자 또는 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.</p>
        <br/>
</footer>
        
        
  </div>
  )
}

export default App;
