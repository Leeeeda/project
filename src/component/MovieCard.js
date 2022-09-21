import {Col,Card,Carousel} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'



function MovieCard1({movies,id}){
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
        navigate('/movieInfo/'+ movies[0].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[0].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[0].itemName}</Card.Title>
    <Card.Text>{movies[0].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[1].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[1].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[1].itemName}</Card.Title>
    <Card.Text>{movies[1].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[2].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[2].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[2].itemName}</Card.Title>
    <Card.Text>{movies[2].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[3].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[3].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[3].itemName}</Card.Title>
    <Card.Text>{movies[3].contentP}</Card.Text>
    </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[4].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[4].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[4].itemName}</Card.Title>
    <Card.Text>{movies[4].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[5].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[5].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[5].itemName}</Card.Title>
    <Card.Text>{movies[5].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[6].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[6].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[6].itemName}</Card.Title>
    <Card.Text>{movies[6].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[7].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[7].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[7].itemName}</Card.Title>
    <Card.Text>{movies[7].contentP}</Card.Text>
    </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[0].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[0].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[0].itemName}</Card.Title>
    <Card.Text>{movies[0].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[5].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[0].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[0].itemName}</Card.Title>
    <Card.Text>{movies[0].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[6].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[1].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[0].itemName}</Card.Title>
    <Card.Text>{movies[0].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[7].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[2].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[0].itemName}</Card.Title>
    <Card.Text>{movies[0].contentP}</Card.Text>
    </div>
    </Card>
    </Carousel.Item>
    </Carousel> 
    )
}

export default MovieCard1;