import {Col,Card,Carousel} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'


function MovieCard({movie,i}){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };
    // let imagePath = 'http://192.168.0.55:8898/images/food' + (i+1) + '.jpg';
    let navigate= useNavigate();
    return(
        
    
        <Card className='card' style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movie[i].id)
    }}>
    <Card.Img variant="top" src= {movie[i].imgPath}/>
    </Card>
    
    
    )
}

export default MovieCard;