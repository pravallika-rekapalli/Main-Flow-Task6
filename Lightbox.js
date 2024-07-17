import './Lightbox.css'
const Lightbox =({image,onClose})=>{
    return(
        <div>
            <div className="grid-item1">
                <p className="close" onClick={onClose}>×</p>

                <img src={image} alt="" className="Selectedimage"/>

            </div>
        </div>
    )
}

export default Lightbox