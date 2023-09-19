import PropTypes from 'prop-types';
const Bottle = ({ bottle ,handlebuybtn}) => {
    const { price,name,img,seller } = bottle
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl">
                <figure className="px-6 pt-6">
                    <img src={img} alt="Shoes" className="rounded-xl w-[300px] h-[300px]" />
                </figure>
                <div className="card-body items-center text-center ">
                    <h2 className="font-semibold text-xl">{name}</h2>
                    <p className="text-xl font-semibold">Brand : {seller}</p>
                    <h3 className="text-xl font-semibold text-gray-500">Price : ${price}</h3>
                    <div className="card-actions">
                        <button onClick={()=>handlebuybtn(bottle)} className="btn btn-outline btn-success my-2 w-[300px]">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handlebuybtn:PropTypes.func.isRequired
  }
export default Bottle;