import './card.css';

function Card({ image, title, description, type}){
    if (type === "features"){
        return(
            <>
                <div className="card text-center" style={{width : "21rem" }}>
                    <img src={image} className="card-img-top card-icon" alt={title} />
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text lead mb-0">{description}</p>
                    </div>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className="card2 text-center" style={{width : "21rem" }}>
                    <img src={image} className="card-img-top card-image" alt={title} />
                    <div className="card-body">
                        <h5 className="card-name">{title}</h5>
                        <p className="card-text">"{description}"</p>
                    </div>
                </div>
            </>
        )
    }
    
}

export default Card;