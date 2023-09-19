import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import Cart from "./Cart";
import Proptypes from "prop-types"
import toast, { Toaster } from 'react-hot-toast';
import { addTols } from "./utilities/Ls";


const Bottles = ({ bottles, newcart }) => {
    const [buy, setBuyed] = useState([])
    useEffect(() => {
        setBuyed(newcart)
    }, [newcart])
    const [totalprice, settotalprice] = useState([])
    const notify = () => toast.error("already purchased",
        {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
    const notify2 = () => toast("Maximum product limit reached",
        {
            icon: '⛔',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
    const handlebuybtn = (bottle) => {
        let totalprice = bottle.price
        const total = buy.length + 1
        const addedone = buy.find(item => item.id == bottle.id)
        if (addedone) {
            notify()
        } else {
            if (total > 5) {
                return notify2()
            } else {
                buy.forEach(item => {
                    totalprice += item.price
                })
                settotalprice(totalprice)
                setBuyed([...buy, bottle])
                console.log(buy);
                addTols(bottle.id)
            }
        }
        // setBuyed(savedcart)
    }
    return (
        <>
            <h1 className="text-center font-semibold text-3xl my-8">Total Bottle : {bottles.length}</h1>
            <div className="flex my-8">
                <div className="grid grid-cols-3 w-[75%%] gap-8">
                    {
                        bottles.map(bottle => <Bottle handlebuybtn={handlebuybtn} bottle={bottle} key={bottle.id}></Bottle>)
                    }
                </div>
                <div className="w-[25%] mx-auto p-4 shadow-xl h-auto space-y-6">
                    <h3 className="text-center my-2 text-2xl font-bold">Total Product : {buy.length}</h3>
                    <hr />
                    {
                        buy.map(one => <Cart key={one.id} one={one}></Cart>)
                    }
                    <hr />
                    <h1 className="text-2xl font-semibold text-amber-500">Total Price : ${totalprice}</h1>
                    {
                        buy.length !== 0 ? <button className="btn btn-outline btn-success w-[80%] ml-12">Purchase Now</button> : ''
                    }
                </div>
                <Toaster></Toaster>
            </div>
        </>
    );
};
Bottles.propTypes = {
    bottles: Proptypes.array
}
export default Bottles;