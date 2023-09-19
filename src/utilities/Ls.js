const getCartls = ()=>{
    const lsCartString = localStorage.getItem("cart")
    if(lsCartString){
        return JSON.parse(lsCartString)
    }
    return []
}
const saveTols = (cart)=>{
    const cartstring = JSON.stringify(cart)
    localStorage.setItem('cart',cartstring)
}
const addTols = (id)=>{
    const cart = getCartls()
    cart.push(id)
    saveTols(cart)
}
export {addTols,getCartls}