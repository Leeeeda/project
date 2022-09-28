import logo from './logo.svg';
import './App.css';
import {Nav, Navbar,Container,Button,Form,Carousel,Breadcrumb} from 'react-bootstrap';
import {useState , useEffect} from 'react';
import {Route, Routes,useNavigate,Link,useLocation} from 'react-router-dom';
import MovieCard1 from './component/MovieCard.js';
import MovieInfo from './component/MovieInfo.js';
import Movie from './component/movie';
import Ani from './component/Ani';
import movieData from './component/MovieData.js';
import MovieCard2 from './component/MovieCard2';
import MovieCard3 from './component/MovieCard3';
import Customer from './component/Customer';
import Use from './component/Use'
import Enquiry from './component/Enquiry';


function App() {
  let navigate = useNavigate();
  let [movies, setMovies] = useState(movieData);
  const{pathname} = useLocation();

    useEffect(()=>{
      window.scrollTo(0,0);
    },[pathname])
  
  
  return (
  <div className='main'>

    {/* 상단바 영역 */}
    <Navbar collapseOnSelect expand="lg" 
    style={{backgroundColor:'rgb(22, 33, 62)', 
    fontSize:'21px',fontWeight:'bold'}}variant="dark">
      <Container>
        <Navbar.Brand onClick={()=>{navigate('/')}}
        style={{fontSize:'40px',fontFamily:'Pacifico, cursive',position:'relative',right:'30px'}} >
          Movie Ch.1</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/movie')}} >영화</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/ani')}}>애니메이션</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="검색어를 입력하세요"
              className="me-2"
              aria-label="Search"
              style={{backgroundColor:'black',borderColor:'gray'}}
            />
            <Button style={{backgroundColor:'rgb(22, 33, 62)',borderColor:'gray'}}>Search</Button>
          </Form>
      </Container>
    </Navbar>


        <Routes>
          <Route path='/' element={
          
          <div className='carouselBanner'>
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
      <Carousel.Item onClick={()=>{navigate('/movieInfo/mv009')}}>
        <img
          className="d-block w-100"
          src= 'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220721_170%2F1658386441523viz5t_JPEG%2Fmovie_image.jpg'
          alt="Second slide"
          height='700px'
        />
      </Carousel.Item>
      <Carousel.Item onClick={()=>{navigate('/movieInfo/mv012')}}>
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

    <Container >
      <br/>
    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 온 가족이 보기 좋은 영화</p>
    
      <MovieCard2 movies={movies} id={movies.id}></MovieCard2>
    </Container>

    <Container >
      <br/>
    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 오싹해지는 공포 영화</p>
    
      <MovieCard3 movies={movies} id={movies.id}></MovieCard3>
    </Container>

    
          </div>}>
            
            </Route>


          <Route path='/movieInfo/:id' element={<MovieInfo   movies={movies} />} />
          <Route path='/movie' element={<Movie></Movie>}></Route>
          <Route path='/ani'  element={<Ani></Ani>}></Route>

          <Route path='/customer_service' element={<Customer></Customer>}></Route>
          <Route path='/use' element={<Use></Use>}></Route>
          <Route path='/enquiry' element={<Enquiry></Enquiry>}></Route>

          <Route path='*' element={<div style={{color:'white'}}>404 Not Found</div>} />
        </Routes>

    {/* Routes */}
    
    
{/* footer 영역 */}
<footer className='footer'>
  <br/>
  
  <Breadcrumb className='breadcrumb'>
      <Breadcrumb.Item onClick={()=>{navigate('/')}}> 메인페이지 </Breadcrumb.Item>
      <Breadcrumb.Item onClick={()=>{navigate('/customer_service')}}>
          고객센터 
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={()=>{navigate('/use')}}>
        이용약관 
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={()=>{navigate('/enquiry')}}> 문의사항 </Breadcrumb.Item>
    </Breadcrumb>

        <br/>
        <p className='font-style'>본 콘텐츠의 저작권은 저작권자 또는 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.</p>
        <br/>
</footer>
        
        
  </div>
  )
}

export default App;
