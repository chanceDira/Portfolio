
import './works.scss'

export default function Works() {

    const data = [
        {
            id: '1',
            icon: 'https://cdn.pixabay.com/photo/2017/01/29/13/20/mobile-devices-2017978__340.png',
            title: 'Website Development',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            img: 'https://cdn.pixabay.com/photo/2017/01/29/13/20/mobile-devices-2017978__340.png'
        },
        {
            id: '2',
            icon: 'https://cdn.pixabay.com/photo/2017/01/29/13/20/mobile-devices-2017978__340.png',
            title: 'DApps Application',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            img: 'https://cdn.pixabay.com/photo/2017/01/29/13/20/mobile-devices-2017978__340.png'
        }
    ]

    return (
        <div className='works' id='works'>
            <div className="slider">
                {data.map(d =>(
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="websites" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://cdn.pixabay.com/photo/2017/01/29/13/20/mobile-devices-2017978__340.png" alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="https://cdn.pixabay.com/photo/2012/04/12/19/38/arrow-30330__340.png" className="arrow left" alt="" />
            <img src="https://cdn.pixabay.com/photo/2012/04/12/19/38/arrow-30330__340.png" className="arrow right" alt="" />
            {/* <img src="https://cdn.pixabay.com/photo/2014/04/02/10/55/arrow-304924__340.png" className="arrow right" alt="" /> */}
        </div>
    )
}
