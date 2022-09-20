import logo from './logo.svg';
import './App.css';
import {Nav, Navbar, NavDropdown,Container,Button,Form,Carousel,Row,Col,Card,Dropdown} from 'react-bootstrap'
import {useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import MovieCard from './component/MovieCard'


function App() {

  let [movie, setMovie] = useState(
    [
      {
        id: 'mv001',
      itemName : '공조2 : 인터네셔날',
      content : '공조2: 인터내셔날 : 네이버 영화 (naver.com)',
      imgPath : 'https://movie-phinf.pstatic.net/20220826_188/1661489945659Su2RI_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  'https://youtu.be/fzUKUfHeIYA'
      },
      {
        id: 'mv002',
      itemName : '헌트',
      content : '헌트 : 네이버 영화 (naver.com)',
      imgPath : ' https://movie-phinf.pstatic.net/20220805_227/1659685387586PIORG_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  'https://youtu.be/CSOb8gia_mg'
      },
      {
        id: 'mv003',
      itemName : '한산: 용의 출현',
      content : ' 한산: 용의 출현 : 네이버 영화 (naver.com)',
      imgPath : 'https://movie-phinf.pstatic.net/20220727_209/1658912961873lVd2W_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  'https://youtu.be/GduEtmvwcI0'
      },
      {
        id: 'mv004',
      itemName : '탑건:매버릭',
      content : '탑건: 매버릭 : 네이버 영화 (naver.com)',
      imgPath : 'https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  'https://youtu.be/Mrj9XACVJ8U'
      },
      {
        id: 'mv005',
      itemName : '블랙폰',
      content : ' 블랙폰 : 네이버 영화 (naver.com)',
      imgPath : 'https://movie-phinf.pstatic.net/20220907_295/1662518947849s9ym1_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  'https://youtu.be/OSFfTzwuXKk'
      },
      {
        id: 'mv006',
      itemName : '놉',
      content : ' 놉 : 네이버 영화 (naver.com)',
      imgPath : 'https://movie-phinf.pstatic.net/20220729_1/1659070685587fXfeh_JPEG/movie_image.jpg?type=w480_2',
      videoPath :  'https://youtu.be/JllzxDFhhnI'
      },
      {
        id: 'mv007',
      itemName : '알라딘',
      content : ' 알라딘 : 네이버 영화 (naver.com)',
      imgPath : ' https://movie-phinf.pstatic.net/20190524_104/1558663170174Q2mmw_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  'https://youtu.be/KrM3vS5sy2w'
      },
      {
        id: 'mv008',
      itemName : '외계+인 1부',
      content : ' 외계+인 1부 : 네이버 영화 (naver.com)',
      imgPath : 'https://movie-phinf.pstatic.net/20220708_75/16572722362230AyHS_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  'https://youtu.be/l9288UVTHkA'
      }
    ]
  )
  return (
  <div className='main'>

    {/* 상단바 영역 */}
    <Navbar collapseOnSelect expand="lg" 
    style={{backgroundColor:'rgb(22, 33, 62)',fontSize:'17px'}} variant="dark">
      <Container>
        <Navbar.Brand href="/" style={{fontSize:'22px',fontWeight:'bold'}}>Movie Intro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="국내 영화" href='/k-movie' id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">가족/코미디</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">SF/액션 </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">공포/스릴러</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">로맨스</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="해외 영화" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">가족/코미디</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">SF/액션</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">공포/스릴러</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">로맨스</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="애니매이션" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">키즈/가족</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">SF/액션</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">코미디</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">로맨스</NavDropdown.Item>
            </NavDropdown>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

  {/* 배너 부분 */}
    <Carousel  className='carouselBanner' fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220818_98%2F1660788879314zIlRs_JPEG%2Fmovie_image.jpg"
          height='700px'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= 'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220721_170%2F1658386441523viz5t_JPEG%2Fmovie_image.jpg'
          alt="Second slide"
          height='700px'
        />
      </Carousel.Item>
      <Carousel.Item>
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
    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 이번 주 인기 있는 영화</p>
    
      <Row sm={1} md={3} >
      {movie.map((data,i)=>{
      return( <MovieCard movie={movie} id={data.id} i={i}></MovieCard>
      );
      })}
      </Row>
      
    </Container>

{/* footer 영역 */}

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

        {/* Routes 영역 */}
        <Routes>
          <Route path='/'></Route>
          <Route path='/k-movie'></Route>
            <Route path='FC'></Route>
            <Route path='SA'></Route>
            <Route path='HS'></Route>
            <Route path='Rom'></Route>
          <Route path='/F-movie'></Route>
            <Route path='FC'></Route>
            <Route path='SA'></Route>
            <Route path='HS'></Route>
            <Route path='Rom'></Route>
          <Route path='/Ani'></Route>
            <Route path='KF'></Route>
            <Route path='SA'></Route>
            <Route path='Com'></Route>
            <Route path='Rom'></Route>

          <Route path='*' element={<div>404 Not Found</div>} />
        </Routes>
  </div>
  )
}

export default App;
