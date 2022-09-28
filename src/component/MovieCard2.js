import {Col,Card,Carousel} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'



function MovieCard2({movies,id}){
    let navigate= useNavigate();
    let [family, setFamily] = useState([9,11,17,24]);
    let [family1, setFamily1] = useState([49,51,53,3]);
    let [family2, setFamily2] = useState([4,12,14,19]);

    return(
    // 온가족이 보기 좋은 영화    
    <Carousel interval={null} indicators={false}>

    <Carousel.Item>
        {family.map((data)=>{
            return(
                <Card  key={movies[data].id} onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
        <Card.Img variant="top" src= {movies[data].imgPath}/>
        <div className="intro">
        <Card.Title>{movies[data].itemName}</Card.Title>
        <Card.Text>{movies[data].contentP}</Card.Text>
    </div>
    </Card>
            )
        })}
    </Carousel.Item>

    <Carousel.Item>
    {family1.map((data)=>{
            return(
                <Card  key={movies[data].id} onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
        <Card.Img variant="top" src= {movies[data].imgPath}/>
        <div className="intro">
        <Card.Title>{movies[data].itemName}</Card.Title>
        <Card.Text>{movies[data].contentP}</Card.Text>
    </div>
    </Card>
            )
        })}
    </Carousel.Item>

    <Carousel.Item>
    {family2.map((data)=>{
            return(
                <Card  key={movies[data].id} onClick={()=>{navigate('/movieInfo/'+ movies[data].id)}} >
        <Card.Img variant="top" src= {movies[data].imgPath}/>
        <div className="intro">
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

export default MovieCard2;