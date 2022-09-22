import {Col,Card,Carousel} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'



function MovieCard3({movies,id}){
    let navigate= useNavigate();
    
    return(
    //     <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
    //     navigate('/movieInfo/'+ movie.id)
    // }} >
    // <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[i].imgPath}/>
    // </Card>
    
    
    <Carousel interval={null} indicators={false}>

        <Carousel.Item>
        <Card class='card' key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[34].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[34].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[34].itemName}</Card.Title>
    <Card.Text>{movies[34].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[1].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[35].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[35].itemName}</Card.Title>
    <Card.Text>{movies[35].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[36].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[36].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[36].itemName}</Card.Title>
    <Card.Text>{movies[36].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[37].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[3].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[37].itemName}</Card.Title>
    <Card.Text>{movies[37].contentP}</Card.Text>
    </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[38].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[38].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[38].itemName}</Card.Title>
    <Card.Text>{movies[38].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[39].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[39].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[39].itemName}</Card.Title>
    <Card.Text>{movies[39].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[40].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[40].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[40].itemName}</Card.Title>
    <Card.Text>{movies[40].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[41].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[41].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[41].itemName}</Card.Title>
    <Card.Text>{movies[41].contentP}</Card.Text>
    </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[43].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[42].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[42].itemName}</Card.Title>
    <Card.Text>{movies[42].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[43].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[43].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[43].itemName}</Card.Title>
    <Card.Text>{movies[43].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[44].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[44].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[44].itemName}</Card.Title>
    <Card.Text>{movies[44].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[45].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[45].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[45].itemName}</Card.Title>
    <Card.Text>{movies[45].contentP}</Card.Text>
    </div>
    </Card>
    </Carousel.Item>
    </Carousel> 
    )
}

export default MovieCard3;