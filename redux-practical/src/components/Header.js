import React from 'react'
function Header(props)
{
    console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuoH4Xr0iooklfe_5PimrJ6QcfKJqgKJBCDQ&usqp=CAU" />
            </div>
        </div>
    )
}

export default Header