import {Col,Card,Carousel} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'



function MovieCard2({movies,id}){
    let navigate= useNavigate();
    
    return(
    // 온가족이 보기 좋은 영화    
    <Carousel interval={null} indicators={false}>

        <Carousel.Item>
        <Card class='card' key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[3].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[3].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[3].itemName}</Card.Title>
    <Card.Text>{movies[3].contentP}</Card.Text>
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
        navigate('/movieInfo/'+ movies[11].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[11].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[11].itemName}</Card.Title>
    <Card.Text>{movies[11].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[17].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[17].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[17].itemName}</Card.Title>
    <Card.Text>{movies[17].contentP}</Card.Text>
    </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[19].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[19].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[19].itemName}</Card.Title>
    <Card.Text>{movies[16].contentP}</Card.Text>
    </div>
    </Card>

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
        navigate('/movieInfo/'+ movies[26].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[26].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[26].itemName}</Card.Title>
    <Card.Text>{movies[26].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[27].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[27].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[27].itemName}</Card.Title>
    <Card.Text>{movies[27].contentP}</Card.Text>
    </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[28].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[28].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[28].itemName}</Card.Title>
    <Card.Text>{movies[28].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[30].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[30].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[30].itemName}</Card.Title>
    <Card.Text>{movies[30].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[31].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[31].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[31].itemName}</Card.Title>
    <Card.Text>{movies[31].contentP}</Card.Text>
    </div>
    </Card>
    
    <Card key={id} style={{ width: '15rem' ,height:'21.5rem' }}  onClick={()=>{
        navigate('/movieInfo/'+ movies[34].id)
        }} >
    <Card.Img style={{width:'15rem' ,height:'344px'}} variant="top" src= {movies[34].imgPath}/>
    <div class="intro">
    <Card.Title>{movies[34].itemName}</Card.Title>
    <Card.Text>{movies[34].contentP}</Card.Text>
    </div>
    </Card>
    </Carousel.Item>
    </Carousel> 
    )
}

export default MovieCard2;