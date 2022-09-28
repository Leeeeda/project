import {Col,Card,Carousel} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'


// 공포영화
function MovieCard3({movies,id}){
    let navigate= useNavigate();
    let [horror,setHorror] = useState([34,35,36,37])
    let [horror1,setHorror1] = useState([40,44,46,39])
    let [horror2,setHorror2] = useState([43,45,41,57])
    return(
    //     <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
    //     navigate('/movieInfo/'+ movie.id)
    // }} >
    // <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[i].imgPath}/>
    // </Card>
    
    
    <Carousel interval={null} indicators={false}>

        <Carousel.Item>
        {horror.map((data,i)=>{
            return(
            <Card key={movies[data].id}  
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img  variant="top" src= {movies[data].imgPath}/>
                <div className="intro">
                <Card.Title>{movies[data].itemName}</Card.Title>
                <Card.Text>{movies[data].contentP}</Card.Text>
                </div>
            </Card>
    
        )})}  
    </Carousel.Item>

    <Carousel.Item>
    {horror1.map((data,i)=>{
            return(
            <Card key={movies[data].id} 
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img variant="top" src= {movies[data].imgPath}/>
                <div className="intro">
                <Card.Title>{movies[data].itemName}</Card.Title>
                <Card.Text>{movies[data].contentP}</Card.Text>
                </div>
            </Card>
            )})}
    </Carousel.Item>

    <Carousel.Item>
    {horror2.map((data,i)=>{
            return(
            <Card  key={movies[data].id}  
                onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
                <Card.Img  variant="top" src= {movies[data].imgPath}/>
                <div className="intro">
                <Card.Title>{movies[data].itemName}</Card.Title>
                <Card.Text>{movies[data].contentP}</Card.Text>
                </div>
            </Card>
            )})}
    </Carousel.Item>
    </Carousel> 
    )
}

export default MovieCard3;