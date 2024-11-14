import React from 'react'

const FirstHomeSect = () => {
    return (
        <div className='home-first-section'>
            <div className="first-sect-overlay">
                <div className="container-fluid first-text">
                    <p>SELECT PRODUCTION PRESENTS</p>
                    <div className="logan-overlay">
                        <h2>LOGAN</h2>
                        <div className="logan-pus">
                            <img src="src\assets\images\loganpus.png" alt="" />
                        </div>
                    </div>
                    <div className="first-sect-body">
                        <img className='car-img ' src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/zh1-rev-car-new.png" alt="" />
                    </div>
                </div>
                <img className='black-shadow' src="src\assets\images\pus.png" alt="" />
            </div>
            <div className="right-bottom-text">
                <h3>"THRILLING ADVENTURE THAT WILL KEEP YOU ON ENDGE."</h3>
                <p>Yasmin Bergam, Movie Magazine</p>
                
                <div className="award-year">
                    <img src="src\assets\images\bestpictureawardr.png" alt="" />
                    <img src="src\assets\images\bestdirector.png" alt="" />
                    <img src="src\assets\images\bestdirectoryear.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default FirstHomeSect