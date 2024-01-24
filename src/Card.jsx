function Card({productDetails,addToCart,removeFromCart,items}){


    return(
    <div className="card" style={{width: "18rem"}}>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top img-fluid" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{productDetails.productName}</h5>

            {productDetails.sale === true ? <p><span className="text-decoration-line-through opacity-25">{productDetails.price}</span> {productDetails.salePrice}</p>:<p>{productDetails.price}</p>}

            {items.some((item)=> item === productDetails.id) ? <button href="#" className="btn btn-danger" onClick={()=>removeFromCart(productDetails)}>Remove from cart </button> : <button href="#" className="btn btn-primary" onClick={()=>addToCart(productDetails)}>Add to cart </button>} 
        </div>
</div>
    );
}export default Card;
