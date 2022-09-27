import {Tabs,Tab,Card } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import movieData from './MovieData';

function Ani (){
    let [movies, setMovies] = useState(movieData);
    let navigate= useNavigate();
    let [comedi1, setComedi1] = useState([25,49,28,48,50,24,51,53,26,56]);
    let [comedi2, setComedi2] = useState([27,55,51,29,28]);
    let [comedi3, setComedi3] = useState([26,30,57,32,53]);
    let [comedi4, setComedi4] = useState([32,56,54,50,26]);
    let [theatrical1, setTheatrical1] = useState([25,30,31,32,52,24,54,55,33,49]);
    let [theatrical2, setTheatrical2] = useState([56,31,55,53,30]);
    let [theatrical3, setTheatrical3] = useState([32,30,50,54,55]);
    let [theatrical4, setTheatrical4] = useState([31,32,30,54,25]);
    let [adventure1,setAdventure1] = useState([24,56,55,33,54,50,51,27,26,57]);
    let [adventure2,setAdventure2] = useState([30,33,48,24,32]);
    let [adventure3,setAdventure3] = useState([27,28,51,54,57]);



    return (
        <Tabs
            id="uncontrolled-tab-example"
            className="mb-3"
            defaultActiveKey="comedi"
        >
            <Tab eventKey="comedi" title="코미디/가족" >
            <p className='p'> 온가족이 모여서 보기 좋은 만화</p>
            {comedi1.map((data,i)=>{
            return(
            <Card className='tabCard' key={movies[data].id} 
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img variant="top" src= {movies[data].imgPath}/>
            </Card>
    
        )})}
            <p className='p'> 마음이 따뜻해지는 영화</p>
            {comedi2.map((data,i)=>{
            return(
            <Card className='tabCard' key={movies[data].id} 
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img  variant="top" src= {movies[data].imgPath}/>
            </Card>
    
        )})}
            <p className='p'> 흥미진진! 눈을 못떼는 영화</p>
            {comedi3.map((data,i)=>{
            return(
            <Card className='tabCard' key={movies[data].id} 
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img variant="top" src= {movies[data].imgPath}/>
            </Card>
    
        )})}
            <p className='p'> 지금 뜨는 콘텐츠</p>
            {comedi4.map((data,i)=>{
            return(
            <Card className='tabCard' key={movies[data].id}
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img variant="top" src= {movies[data].imgPath}/>
            </Card>
    
        )})}
            </Tab>

            <Tab eventKey="series" title="극장판">
            <p className='p'> 오늘의 발견!</p>
            {theatrical1.map((data,i)=>{
            return(
            <Card className='tabCard' key={movies[data].id}
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img variant="top" src= {movies[data].imgPath}/>
            </Card>
    
        )})}
            <p className='p'> 귀여운 등장인물, 흥미진진한 스토리!</p>
            {theatrical2.map((data,i)=>{
            return(
            <Card className='tabCard' key={movies[data].id}  
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img variant="top" src= {movies[data].imgPath}/>
            </Card>
    
        )})}
            <p className='p'> 인기 있는 컨텐츠</p>
            {theatrical3.map((data,i)=>{
            return(
            <Card className='tabCard' key={movies[data].id}  
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img variant="top" src= {movies[data].imgPath}/>
            </Card>
    
        )})}
            <p className='p'> 에디터 추천 영화</p>
            {theatrical4.map((data,i)=>{
            return(
            <Card className='tabCard' key={movies[data].id}  
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img  variant="top" src= {movies[data].imgPath}/>
            </Card>
    
        )})}
            
            </Tab>
            
            <Tab eventKey="adventure" title="모험">
            <p className='p'>다함께 떠나자~! 감정이입 되는 모험 영화</p>
            {adventure1.map((data,i)=>{
            return(
            <Card className='tabCard' key={movies[data].id}   
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img  variant="top" src= {movies[data].imgPath}/>
            </Card>
    
        )})}
            <p className='p'>유쾌한 모험 영화</p>
            {adventure2.map((data,i)=>{
            return(
            <Card className='tabCard' key={movies[data].id}   
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img variant="top" src= {movies[data].imgPath}/>
            </Card>
    
        )})}
            <p className='p'> 미스테리,신비로운 모험 영화</p>
            {adventure3.map((data,i)=>{
            return(
            <Card className='tabCard' key={movies[data].id} 
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img variant="top" src= {movies[data].imgPath}/>
            </Card>
    
        )})}
            </Tab>

        </Tabs>
        )
}

export default Ani