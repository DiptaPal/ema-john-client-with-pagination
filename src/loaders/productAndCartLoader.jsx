import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () =>{
    //get Products data
    const productsData = await fetch('https://ema-john-server-henna.vercel.app/products');
    const {products} = await productsData.json();


    //get cart data
    const savedCart = getStoredCart();
    const initialCart = [];
    for(const id in savedCart){
        const addedProduct = products.find(product => product._id === id)
        if(addedProduct){
            const quantity = savedCart[id]
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }


    return { products: products, initialCart: initialCart };
}