import {Card,ListGroup,Ratio,CloseButton,Button} from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import MovieData from './MovieData.js'


function MovieInfo({movies}){

    let {likeCnt, setLikeCnt}=useState(0);

    let {id} = useParams();
    let movieInfo = movies.find( (data, i) => {
        return data.id == id;
        });

    let navigate = useNavigate();
    
    return (
    <div>    
        <Card style={{ width: '60%', margin:'0 auto', backgroundColor:'rgb(15, 52, 96)'}} 
        className='movieInfoPosition'>

    <CloseButton variant="white" onClick={()=>{navigate('/')}}></CloseButton>
    <Ratio aspectRatio='16x9'>
        
    {movieInfo.videoPath}
    
    </Ratio>
    <br/>
    <Button variant="success">보러 가기</Button>{' '}
    <Ratio style={{width:'40px'}}>
    <Button></Button>
    </Ratio>
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