import './ImageCircle.css'

function ImageCircle({ urlImage, borderColor }) {
    return (
        <>
            <div  className='content-img' style={{border: `5px solid ${borderColor}`}}>
                <img className='content-img__image' src={urlImage} alt="" />
            </div>
        </>
    )
    
}


export default ImageCircle