import React, { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/product/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data.data); // Lưu ý: Dữ liệu sản phẩm được lấy từ data.data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {" "}
            {/* Sử dụng _id hoặc id, tùy thuộc vào cách backend trả về */}
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
