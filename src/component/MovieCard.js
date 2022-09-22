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
    
    
    <Carousel className='carousel' interval={null} indicators={false}>

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
        navigate('/movieInfo/'+ movies[8].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[8].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[8].itemName}</Card.Title>
    <Card.Text>{movies[8].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[9].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[9].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[9].itemName}</Card.Title>
    <Card.Text>{movies[9].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[10].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[10].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[10].itemName}</Card.Title>
    <Card.Text>{movies[10].contentP}</Card.Text>
    </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[11].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[11].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[11].itemName}</Card.Title>
    <Card.Text>{movies[11].contentP}</Card.Text>
    </div>
    </Card>

    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[12].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[12].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[12].itemName}</Card.Title>
    <Card.Text>{movies[12].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[14].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[14].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[14].itemName}</Card.Title>
    <Card.Text>{movies[14].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[16].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[16].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[16].itemName}</Card.Title>
    <Card.Text>{movies[16].contentP}</Card.Text>
    </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[25].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[25].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[25].itemName}</Card.Title>
    <Card.Text>{movies[25].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[32].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[32].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[32].itemName}</Card.Title>
    <Card.Text>{movies[32].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[35].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[35].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[35].itemName}</Card.Title>
    <Card.Text>{movies[35].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[26].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[26].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[26].itemName}</Card.Title>
    <Card.Text>{movies[26].contentP}</Card.Text>
    </div>
    </Card>
    </Carousel.Item>
    </Carousel> 
    )
}

export default MovieCard1;