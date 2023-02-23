import React from 'react'

function Home(props) {
    return (
        <div>

            <h1>Home Component</h1>
            
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img alt='' src="https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () => { props.addToCartHandler({ pice: 1000, name: 'i phone 11' }) }
                        }>
                        Add To Cart
                    </button>
                    <button
                        onClick={
                            () => { props.removeFromCartHandler({ pice: 10000, name: 'i phone 12' }) }
                        }>
                        Remove From Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home