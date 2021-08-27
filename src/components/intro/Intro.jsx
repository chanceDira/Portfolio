import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import chance from './chance.jpeg'

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            strings: ['Software Engineer ', 'Blockchain Enthusiast', "Front-end Developer" ],
            backDelay:  1500,
            backSpeed:  60,
            showCursor: true,
         })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imageContainer">
                    <img src={chance} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi @everyone, I'm</h2>
                    <h1>Chance D. IRADUKUNDA</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKD_Ct9TIwNc_3-OUXLGXqcT0XUKkngIZZSKQZtvKLY6U2_-m0WgZAFuwomm7tcbX3oQ&usqp=CAU" alt="" />
                </a>
            </div>
        </div>
    )
}
