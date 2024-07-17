import React, {useState} from "react";
import "./imagegrid.css";
import Lightbox from "./Lightbox";

let img = [
    'https://chilternchatter.com/wp-content/uploads/2018/01/RED-Bird.jpg',
    'https://cdn.pixabay.com/photo/2014/08/05/04/38/macaw-410144_1280.jpg',
    'https://wallup.net/wp-content/uploads/2018/10/07/363856-peacock-bird-colorful-56.jpg',
    'https://cdn.pixabay.com/photo/2024/02/28/15/14/ai-generated-8602228_1280.jpg',
    'https://jooinn.com/images/bluebird-1.jpg',
    'https://i.pinimg.com/originals/d7/8b/64/d78b649a877c890074f008a4feb64e57.jpg',
    'https://www.allaboutbirds.org/news/wp-content/uploads/2020/07/STanager-Shapiro-ML.jpg',
    'https://cdn.britannica.com/67/154067-050-2C84CA8F/night-heron.jpg',
    'https://cdn.pixabay.com/photo/2016/11/22/19/33/kingfisher-1850234_1280.jpg'
]
const Imagegrid =()=>{
    let [selectedImage,setSelectedImage] = useState(null);
    let openModal = (ele)=>{
        setSelectedImage(ele);
    }
    let closeModal = ()=>{
        setSelectedImage(null);
    }
    return(
        <div className="grid-item">
            {img.map((ele,index)=> {
                    return <img key={index} src={ele} alt="" className="image" onClick={()=>{openModal(ele)}}/> 
                })}
        {selectedImage && <Lightbox image={selectedImage} onClose={closeModal}/>}
        </div>

    )
}
export default Imagegrid