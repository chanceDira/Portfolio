import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Blockchain</li>
            </ul>

            <div className="container">
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_960_720.jpg" alt="" />
                    <h3>Furniture Shop App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_960_720.jpg" alt="" />
                    <h3>Furniture Shop App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_960_720.jpg" alt="" />
                    <h3>Furniture Shop App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_960_720.jpg" alt="" />
                    <h3>Furniture Shop App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_960_720.jpg" alt="" />
                    <h3>Furniture Shop App</h3>
                </div>
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_960_720.jpg" alt="" />
                    <h3>Furniture Shop App</h3>
                </div>
            </div>
        </div>
    )
}
