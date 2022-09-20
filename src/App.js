import logo from './logo.svg';
import './App.css';
import {Nav, Navbar, NavDropdown,Container,Button,Form,Carousel,Row,Col,Card,Dropdown} from 'react-bootstrap'

function App() {
  return (
  <div className='main'>
    <Navbar collapseOnSelect expand="lg" 
    style={{backgroundColor:'rgb(22, 33, 62)',fontSize:'17px'}} variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{fontSize:'22px',fontWeight:'bold'}}>Movie Intro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="국내 영화" id="collasible-nav-dropdown">
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
  
    <Carousel fade className='carouselBanner'>
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
    <Carousel>

    <Container className='card-box'>
      <br/>
    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 이번 주 인기 있는 영화</p>
      <Row md={4} >
        <Carousel.Item>
      <Card style={{ width: '15rem' ,height:'22rem' }}>
      <Card.Img variant="top" src='https://movie-phinf.pstatic.net/20220826_188/1661489945659Su2RI_JPEG/movie_image.jpg?type=m203_290_2' />
    </Card>

    <Card style={{ width: '15rem' ,height:'22rem' }}>
      <Card.Img variant="top" src=' https://movie-phinf.pstatic.net/20220805_227/1659685387586PIORG_JPEG/movie_image.jpg?type=m203_290_2' />
    </Card>

    <Card style={{ width: '15rem' ,height:'22rem' }}>
      <Card.Img variant="top" src='https://movie-phinf.pstatic.net/20220727_209/1658912961873lVd2W_JPEG/movie_image.jpg?type=m203_290_2' />
    </Card>

    <Card style={{ width: '15rem' ,height:'22rem' }}>
      <Card.Img variant="top" src=' https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg?type=m203_290_2' />
    </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card style={{ width: '15rem' ,height:'22rem' }}>
      <Card.Img variant="top" src='https://movie-phinf.pstatic.net/20220907_295/1662518947849s9ym1_JPEG/movie_image.jpg?type=m203_290_2' />
    </Card>

    <Card style={{ width: '15rem' ,height:'22rem' }}>
      <Card.Img variant="top" src='https://movie-phinf.pstatic.net/20220729_1/1659070685587fXfeh_JPEG/movie_image.jpg?type=w480_2' />
    </Card>
</Carousel.Item>
    
      </Row>
      
    </Container>
</Carousel>
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
  </div>
  )
}

export default App;
