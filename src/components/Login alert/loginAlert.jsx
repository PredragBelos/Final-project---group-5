import React from 'react';
import './css/loginAlert.css';

function LoginAlert({setAlertVisibility, alertVisibility}) {

    const alertVisb = (alertVisibility)? "modal display-block" : "modal display-none"

    // STATE


    //LIFECICLE

    //FUNCTIONS
    const closeAlert = () => {
        setAlertVisibility(false);
    }
    //RENDER
    return (
        <div className={`${alertVisb} alert`}>
                <section className="alert-main alertSection">
                    <header className="alertHeader">
                        <p className="alertHeading">Alert</p>
                    </header>
                    <div className="alertMessageSection">
                        <p className="alertMessage">Username or password is incorrect!</p>
                        <button className="alertBtn" onClick={closeAlert}>OK</button>
                    </div>
                </section>
            </div>
    );
}

export default LoginAlert;