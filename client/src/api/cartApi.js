export const getCartItems = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_API_URL+ '/cart',
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
        const data = await response.json();
        return data;
    } 
    catch (error) {
        console.log(error);
    }
}
export const addToCart = async (product) => {
    try {
        const response = await fetch(process.env.REACT_APP_API_URL+ '/cart',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "productId": product })
            });
        const data = await response.json();
        return data;
    } 
    catch (error) {
        console.log(error);
    }
}

export const deleteCartItem = async (id) => {
    try {
        const response = await fetch(process.env.REACT_APP_API_URL+ `/cart/${id}`,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                params: { "id": id }
            });
        const data = await response.json();
        return data;
    } 
    catch (error) {
        console.log(error);
    }
}

export const updateCartItem = async (newCartItem) => {
    try {
        const response = await fetch(process.env.REACT_APP_API_URL+ `/cart/${newCartItem._id}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "change": newCartItem })
            });
        const data = await response.json();
        return data;
    } 
    catch (error) {
        console.log(error);
    }
}