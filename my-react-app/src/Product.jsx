

function Product(props){


let {name,price}= props;

    return(
        <div className="product">
            <h3>{name}</h3>
            <h3>{price}</h3>
           
        </div>
    )
};
export default Product;