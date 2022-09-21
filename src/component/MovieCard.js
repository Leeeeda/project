import {Col,Card,Carousel} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'


function MovieCard({movies,i,movie,id}){
    let navigate= useNavigate();
    return(
        <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movie.id)
    }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[i].imgPath}/>
    </Card>
    
    
    )
}

export default MovieCard;