import {Card,Ratio,CloseButton,Button} from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom'



function MovieInfo({movies}){
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
    
    <a  href={movieInfo.downloadLink} target='_blank'>
        <Button as="input" type="button" value="보러가기" 
        style={{backgroundColor:'rgb(83, 52, 131)',width:'840%', borderColor :'rgb(83, 52, 131)'}}/></a>
    <Card.Body>
        <Card.Title style={{color:'white', fontWeight:'bold'}}>{movieInfo.itemName}
        </Card.Title>
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