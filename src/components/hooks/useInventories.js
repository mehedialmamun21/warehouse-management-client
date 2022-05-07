import { useEffect, useState } from "react";

const useInventories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/product")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return [products]
}

export default useInventories;