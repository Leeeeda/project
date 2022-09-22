import {Tabs,Tab,Carousel,Card } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import movieData from './MovieData';



function Movie (){
    let navigate=useNavigate();
    let [tabIndex, setTabIndex] = useState(3);
    let [movies,setMovies] = useState(movieData)
    

    return (
        <Tabs
            id="uncontrolled-tab-example"
            className="mb-3"
            defaultActiveKey="korea"
        >
    <Tab eventKey="korea" title="국내 영화" >
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 국내 인기 있는 영화</p>
                    
        <Card class='card' key={movies[0].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[0].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[0].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[0].itemName}</Card.Title>
    <Card.Text>{movies[0].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={movies[11].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[11].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[11].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[11].itemName}</Card.Title>
    <Card.Text>{movies[11].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={movies[8].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[8].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[8].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[8].itemName}</Card.Title>
    <Card.Text>{movies[8].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={movies[9].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[9].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[9].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[9].itemName}</Card.Title>
    <Card.Text>{movies[9].contentP}</Card.Text>
    </div>
    </Card>
    
        <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> n번째 정주행! 보고 또 봐도 좋은 명작</p>
        
            <Card class='card' key={movies[4].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[4].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[4].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[4].itemName}</Card.Title>
    <Card.Text>{movies[4].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={movies[9].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[9].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[9].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[9].itemName}</Card.Title>
    <Card.Text>{movies[9].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={movies[41].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[41].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[41].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[41].itemName}</Card.Title>
    <Card.Text>{movies[41].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={movies[42].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[42].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[42].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[42].itemName}</Card.Title>
    <Card.Text>{movies[42].contentP}</Card.Text>
    </div>
    </Card>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 한국이 만든 컨텐츠</p>           
                    

    <Card key={movies[44].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[44].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[44].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[44].itemName}</Card.Title>
    <Card.Text>{movies[44].contentP}</Card.Text>
    </div>
    </Card>
<Card class='card' key={movies[4].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[4].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[4].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[4].itemName}</Card.Title>
    <Card.Text>{movies[4].contentP}</Card.Text>
    </div>
    </Card>
    <Card key={movies[11].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[11].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[11].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[11].itemName}</Card.Title>
    <Card.Text>{movies[11].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={movies[2].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[2].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[2].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[2].itemName}</Card.Title>
    <Card.Text>{movies[2].contentP}</Card.Text>
    </div>
    </Card>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 믿고보는 천만 관객 돌파!</p>
                    
                    <Card class='card' key={movies[4].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[4].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[4].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[4].itemName}</Card.Title>
    <Card.Text>{movies[4].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={movies[15].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[15].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[15].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[15].itemName}</Card.Title>
    <Card.Text>{movies[15].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={movies[16].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[16].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[16].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[16].itemName}</Card.Title>
    <Card.Text>{movies[16].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={movies[47].id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[47].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[47].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[47].itemName}</Card.Title>
    <Card.Text>{movies[47].contentP}</Card.Text>
    </div>
    </Card>
            </Tab>
            <Tab eventKey="foreign" title="해외 영화" 
                onClick={()=>{navigate('/k-movie/SA'); setTabIndex(1);}}>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 해외 인기 있는 영화</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 에디터 추천 영화</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> n번째 정주행! 보고 또 봐도 좋은 명작</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 지난 1년간 개봉한 영화</p>
            </Tab>
            <Tab eventKey="comedi" title="코미디/가족" 
                onClick={()=>{navigate('/k-movie/HS'); setTabIndex(2);}}>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 온 가족이 모여서 보기 좋은 영화</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 한국 코미디 영화</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 해외 코미디 영화</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 진심이 느껴지는 영화</p>
            </Tab>

            <Tab eventKey="horror" title="공포/스릴러" 
                onClick={()=>{navigate('/k-movie/Rom'); setTabIndex(3);}}>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 오늘의 발견!</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 공포 마니아를 위한 추천 영화</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 긴장감 넘치는 영화</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 한국형 범죄 스릴러!</p>
            </Tab>
            
            <Tab eventKey="romance" title="로맨스" 
                onClick={()=>{navigate('/k-movie/Rom'); setTabIndex(3);}}>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}>  기분이 좋아지는 설레는 로맨스 영화</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> n번째 정주행! 보고 또 봐도 좋은 명작</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 진심이 느껴지는 영화</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 로맨틱한 코미디 영화</p>
            </Tab>
            
            <Tab eventKey="action" title="SF/액션" 
                onClick={()=>{navigate('/k-movie/Rom'); setTabIndex(3);}}>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> 긴장감 넘치는 액션 영화</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}> SF, 판타지, 슈퍼히어로 마니아를 위한 영화</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}>  화려한 액션 + 유쾌한 코미디? 이건 못참지!</p>
                    <p style={{color:'white', fontSize:'20px' ,fontWeight:'bold'}}>재미 보장! 천만 관객 액션 영화</p>
            </Tab>
            
        </Tabs>
        )
}

export default Movie