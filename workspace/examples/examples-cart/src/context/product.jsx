import { useEffect, useState } from "react";

const Product = () => {
  const [productsData, setProductsData] = useState([]);
  const url = "http://localhost:3001/Product";

  /* const [cartProducts, setProducts] = useState([]); */
 /*  const addProduct = () => {
    setProducts((prev) => prev.push(product));
    console.log(cartProducts);
  }; */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProductsData(data);
      } catch (error) {}
    };
    fetchData();
  }, [url]);

 /*  const [name, setName] = useState(()=>{
   const saved = localStorage.getItem("name");
   const initialValue = JSON.parse(saved);
   return initialValue || "id";

  }); */
 

  return (
    <>
      <div className=" productName">
        {productsData.map((product) => (
          <div key={product.id} className="productStyle">
            <img src={product.img} alt={product.name} />
            <div className="textStyle">
              <p>{product.name}</p>
              <p>{product.price}</p>
              {/* <button onClick= { () => addProduct (product)}>
        add product

    </button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Product;
