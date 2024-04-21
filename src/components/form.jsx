const Form = ({title,pos}) => {
    return (
        <>
            <header className="masthead"
                style={
                    {
                        backgroundImage: 'url("https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg")',
                        padding: pos == "top" ? "192px 0 192px 0" : "100px 0 100px 0",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="text-center text-white">
                                <h1 className="mb-5">{title}</h1>
                                <form className="form-subscribe" id="contactForm">
                                    <div className="row">
                                        <div className="col"> 
                                            <input className="form-control form-control-lg" id="emailAddress" style={{height : "9vh"}} type="email" placeholder="Email Address" />
                                        </div>
                                        <div className="col-auto"><button className="btn btn-primary btn-lg" style={{height : "9vh"}} id="submitButton" type="submit">Submit</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Form