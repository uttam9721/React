import './App.css';

function Product ({title,price,features}){
    
    let isDiscount = price>3000?"Discount of 5%":"";
    let styles={backgroundColor:"yellow"};

    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price {price}:</h5>
            <p>{isDiscount}</p>
            
        </div>
    )
}
export default Product;