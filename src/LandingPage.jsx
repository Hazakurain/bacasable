import './LandingPage.css'


function LandingPage() {
    return(
        <>
            <div className="container">
                <div className="row">
                    <p className="chooseText col-12">Select your style : </p>
                </div>
                <div className="row">
                    <div className="imageContainer">
                        <img className="imageSize" src="/images/persona3.png" alt="Persona 3 Style"/>
                        <img className="imageSize" src="/images/persona3.png" alt="Persona 3 Style"/>
                        <img className="imageSize" src="/images/persona3.png" alt="Persona 3 Style"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;