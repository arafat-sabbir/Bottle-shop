import PropTypes from "prop-types"
const Cart = ({one}) => {
    const {name,img,price} = one
    return (
       <>
        <div className="space-y-4">
           <div className="text-center my-4">
           <img className="w-[100px] h-[100px] mx-auto" src={img} alt="" />
           <h1 className="text-xl font-semibold">Name : {name}</h1>
           <h3 className="text-lg font-semibold text-gray-500">Price : ${price}</h3>
           </div>
        </div>
       </>
    );
};
Cart.propTypes = {
    one : PropTypes.object
}
export default Cart;