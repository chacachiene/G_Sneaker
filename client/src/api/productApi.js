export const getAllProducts = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_API_URL+ '/products',
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
        
        const data = await response.json();
        console.log(data)
        return data
    } 
    catch (error) {
        console.log(error);
    }
}
