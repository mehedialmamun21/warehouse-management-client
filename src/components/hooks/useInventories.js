import { useEffect, useState } from "react";

const useInventories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://salty-castle-19082.herokuapp.com/product")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return [products,setProducts]
}

export default useInventories;