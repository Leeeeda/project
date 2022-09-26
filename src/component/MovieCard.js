import {Col,Card,Carousel} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'



function MovieCard1({movies,id}){
    let navigate= useNavigate();
    let [best, setBest] = useState([0,8,9,10]);
    let [best1, setBest1] = useState([11,14,12,16]);
    let [best2, setBest2] = useState([34,35,32,17]);
    
    return(
    //     <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
    //     navigate('/movieInfo/'+ movie.id)
    // }} >
    // <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[i].imgPath}/>
    // </Card>
    
    
    <Carousel className='carousel' interval={null} indicators={false}>

        <Carousel.Item>
        {best.map((data)=>{
            return(
                <Card  key={movies[data].id} onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
        <Card.Img variant="top" src= {movies[data].imgPath}/>
        <div class="intro">
        <Card.Title>{movies[data].itemName}</Card.Title>
        <Card.Text>{movies[data].contentP}</Card.Text>
    </div>
    </Card>
            )
        })}
        
    </Carousel.Item>

    <Carousel.Item>
    {best1.map((data)=>{
            return(
                <Card  key={movies[data].id} onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
        <Card.Img variant="top" src= {movies[data].imgPath}/>
        <div class="intro">
        <Card.Title>{movies[data].itemName}</Card.Title>
        <Card.Text>{movies[data].contentP}</Card.Text>
    </div>
    </Card>
            )
        })}
    </Carousel.Item>

    <Carousel.Item>
    {best2.map((data)=>{
            return(
                <Card  key={movies[data].id} onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
        <Card.Img variant="top" src= {movies[data].imgPath}/>
        <div class="intro">
        <Card.Title>{movies[data].itemName}</Card.Title>
        <Card.Text>{movies[data].contentP}</Card.Text>
    </div>
    </Card>
            )
        })}
    </Carousel.Item>
    </Carousel> 
    )
}

export default MovieCard1;