import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  },[]);

  const getProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleAdd = async (e) => {
    e.preventDefault()
    const body =  {
        // category: "men's wallet",
        // description:
        //   "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        // image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        // price: 110.95,
        // rating: 3,
        // count: 1222,
        // rate: 3.9,
        // title: "abcd - Foldsack No. 1 Back"
        name: 'ammad',
        age: 19

      }
      fetch("https://fakestoreapi.com/products/6", {
          method: "DELETE",
        //   header: {"Content-Type" : "application/json; charset=UTF-8"},
        //   body: JSON.stringify(body)
        }).then(res => res.json()).then(json => console.log("added",json))
        
    };

  return (
    <div>
      <ol>
        {products.map((product, index) => {
          return <li key={index}>{product.id}</li>;
        })}
      </ol>
      <button onClick={handleAdd}> add</button>
    </div>
  );
}

export default Products;
