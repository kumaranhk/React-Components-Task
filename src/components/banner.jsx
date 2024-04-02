import './banner.css';

function Banner({ title, description, image, type}){
    if(type === "description"){
        return(
            <>
                <div className="card text-center banner" style={{width: "49vw"}}>
                <div className="card-body banner-text">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text lead">{description}</p>
                </div>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className="card text-center image" style={{width: "49vw"}}>
                    <img src={image} alt={type} />
                </div>
            </>
        )
    }
}

export default Banner;