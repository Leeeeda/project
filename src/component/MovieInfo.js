import {Card,ListGroup,Ratio,CloseButton,Button} from 'react-bootstrap'
import {useParams, useNavigate, Link} from 'react-router-dom'
import {useState} from 'react'


function MovieInfo({movies}){

    let {likeCnt, setLikeCnt}=useState(0);

    let {id} = useParams();
    let movieInfo = movies.find( (data, i) => {
        return data.id == id;
        });

    let navigate = useNavigate();
    
    return (
    <div>    
        <Card 
        className='movieInfoPosition'>

    <CloseButton variant="white" onClick={()=>{navigate('/')}}></CloseButton>
    <Ratio aspectRatio='16x9'>
        
    {movieInfo.videoPath}
    
    </Ratio>
    <br/>
    
    <Card.Body>
        <Card.Title style={{color:'white', fontWeight:'bold'}}>{movieInfo.itemName}</Card.Title>
        <Card.Text style={{color:'white'}}>
            {movieInfo.contentP}
        </Card.Text>
        <Card.Text style={{color:'white'}}>
            {movieInfo.contentS}
        </Card.Text>
    </Card.Body>
    
    </Card>
        
</div>

    )
}

export default MovieInfo;