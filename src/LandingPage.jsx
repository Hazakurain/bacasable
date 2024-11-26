import './LandingPage.css'
import {useNavigate} from "react-router-dom";

function LandingPage() {

    const navigate = useNavigate();

    return(
        <>
            <div className="container">
                <div className="row">
                    <p className="chooseText col-12">Select your style : </p>
                </div>
                <div className="row">
                    <div className="imageContainer">
                        <img className="imageSize" src="/images/persona3.png" alt="Persona 3 Style" onClick={() => navigate('/portfolio')} />
                        <img className="imageSize" src="/images/persona3.png" alt="Persona 3 Style"  onClick={() => navigate('/portfolio')}/>
                        <img className="imageSize" src="/images/persona3.png" alt="Persona 3 Style"  onClick={() => navigate('/portfolio')}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;