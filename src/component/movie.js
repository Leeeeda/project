import {Tabs,Tab,Carousel,Card } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import movieData from './MovieData';



function Movie (){
    let [movies, setMovies] = useState(movieData);
    let navigate=useNavigate();
    let [tabIndex, setTabIndex] = useState(3);
    let [kMovie1, setKMovie1] = useState([0,8,9,11,16,4,25,45,47,44]);
    let [kMovie2, setKMovie2] = useState([9,16,4,5,41,42,45,47,15,8]);
    let [kMovie3, setKMovie3] = useState([4,15,16,47,2]);
    let [fMovie1, setFMovie1] = useState([10,14,24,34,26,35,29,17,18,13]);
    let [fMovie2, setFMovie2] = useState([6,7,10,20,21,27,32,35,37,46]);
    let [fMovie3, setFMovie3] = useState([18,28,23,21,37]);
    let [comedi1, setComedi1] = useState([0,1,3,4,11,17,24,30,31,47]);
    let [comedi2, setComedi2] = useState([6,7,12,32,20]);
    let [comedi3, setComedi3] = useState([24,26,27,18,19]);
    let [horror1, setHorror1] = useState([36,37,38,46,35,34,39,43,44,40]);
    let [horror2, setHorror2] = useState([43,44,47,39,36]);
    let [horror3, setHorror3] = useState([41,42,43,44,45]);
    let [romance1, setRomance1] =useState([20,23,19,29,22,17,18,21,6]);
    let [romance2, setRomance2] =useState([23,21,19,18,17]);
    let [romance3, setRomance3] =useState([17,19,6,20,22]);
    let [action1, setAction1] =useState([16,14,8,10,47,13,12,9,41,11]);
    let [action2, setAction2] =useState([14,9,13,11,12]);
    let [action3, setAction3] =useState([11,12,13,16,15]); 

    return (
        <Tabs
            id="uncontrolled-tab-example"
            className="mb-3"
            defaultActiveKey="korea"
        >
    <Tab eventKey="korea" title="국내 영화" >
        <p className='p'> 국내 인기 있는 영화</p>
        {kMovie1.map((data,i)=>{
            return(
            <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
            </Card>
    
        )})}  

        
    <p className='p'> 한국이 만든 컨텐츠</p> 
    {kMovie2.map((data,i)=>{
            return(
            
        <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
        onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
    <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
    </Card>
    
        )})}          

        
    <p className='p'> 믿고보는 천만 관객 돌파!</p>
    {kMovie3.map((data,i)=>{
            return(
            
        <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
        onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
    <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
    </Card>
        )})} 
            </Tab>


            <Tab eventKey="foreign" title="해외 영화" >
                    <p className='p'> 해외 인기 있는 영화</p>

                    {fMovie1.map((data,i)=>{
            return(
            
        <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
        onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
    <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
    </Card>
    
        )})} 
                    <p className='p'> 에디터 추천 영화</p>

                    {fMovie2.map((data,i)=>{
            return(
            
        <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
        onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
    <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
    </Card>
    
        )})} 
                    <p className='p'> n번째 정주행! 보고 또 봐도 좋은 명작</p>
                    {fMovie3.map((data,i)=>{
            return(
            
        <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
        onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
    <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
    </Card>
    
        )})} 
            </Tab>
        
        
            <Tab eventKey="comedi" title="코미디/가족" >
                    <p className='p'> 온 가족이 모여서 보기 좋은 영화</p>
                    {comedi1.map((data,i)=>{
            return(
            
        <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
        onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
    <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
    </Card>
    )})} 
        <p className='p'> 해외 코미디 영화</p>
        {comedi2.map((data,i)=>{
        return(
        
        <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
        onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
        <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
        </Card>
        )})} 
        <p className='p'> 진심이 느껴지는 영화</p>
                    {comedi3.map((data,i)=>{
                        return(
                        
                    <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
                    onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
                </Card>
                )})} 
            </Tab>

            <Tab eventKey="horror" title="공포/스릴러">
                    <p className='p'> 공포 마니아를 위한 추천 영화</p>
                    {horror1.map((data,i)=>{
                        return(
                        
                    <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
                    onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
                </Card>
                )})} 
                    <p className='p'> 긴장감 넘치는 영화</p>
                    {horror2.map((data,i)=>{
                        return(
                        
                    <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
                    onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
                </Card>
                )})} 
                    <p className='p'> 한국형 범죄 스릴러!</p>
                    {horror3.map((data,i)=>{
                        return(
                        
                    <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
                    onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
                </Card>
                )})} 
            </Tab>
            
            <Tab eventKey="romance" title="로맨스">
                    <p className='p'>  기분이 좋아지는 설레는 로맨스 영화</p>
                    {romance1.map((data,i)=>{
                        return(
                        
                    <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
                    onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
                </Card>
                )})} 
                    <p className='p'> n번째 정주행! 보고 또 봐도 좋은 명작</p>
                    {romance2.map((data,i)=>{
                        return(
                        
                    <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
                    onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
                </Card>
                )})} 
                    <p className='p'> 로맨틱한 코미디 영화</p>
                    {romance3.map((data,i)=>{
                        return(
                        
                    <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
                    onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
                </Card>
                )})} 
            </Tab>
            
            <Tab eventKey="action" title="SF/액션">
                    <p className='p'> 긴장감 넘치는 액션 영화</p>
                    {action1.map((data,i)=>{
                        return(
                        
                    <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
                    onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
                </Card>
                )})} 
                    <p className='p'> SF, 판타지, 슈퍼히어로 마니아를 위한 영화</p>
                    {action2.map((data,i)=>{
                        return(
                        
                    <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
                    onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
                </Card>
                )})} 
                    <p className='p'>  화려한 액션 + 유쾌한 코미디? 이건 못참지!</p>
                    {action3.map((data,i)=>{
                        return(
                        
                    <Card class='card' key={movies[data].id} style={{ width: '11rem' ,height:'14rem' }}  
                    onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img style={{width: '11rem' ,height:'14rem'}} variant="top" src= {movies[data].imgPath}/>
                </Card>
                )})} 
            </Tab>
            
        </Tabs>
        )
}

export default Movie