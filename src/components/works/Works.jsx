
import './works.scss'

export default function Works() {
    return (
        <div className='works' id='works'>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="https://cdn.pixabay.com/photo/2017/01/29/13/20/mobile-devices-2017978__340.png" alt="websites" />
                                </div>
                                <h2>Title</h2>
                                <p>Le lorem ipsum est, en imprimerie, une suite de 
                                    mots sans signification utilisée à titre provisoire pour calibrer une mise en page.
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://cdn.pixabay.com/photo/2017/01/29/13/20/mobile-devices-2017978__340.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://cdn.pixabay.com/photo/2012/04/12/19/38/arrow-30330__340.png" className="arrow left" alt="" />
            <img src="https://cdn.pixabay.com/photo/2012/04/12/19/38/arrow-30330__340.png" className="arrow right" alt="" />
            {/* <img src="https://cdn.pixabay.com/photo/2014/04/02/10/55/arrow-304924__340.png" className="arrow right" alt="" /> */}
        </div>
    )
}
