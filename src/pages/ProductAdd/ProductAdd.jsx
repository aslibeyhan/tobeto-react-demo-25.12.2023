import React, { useState } from 'react';
import axios from 'axios';

const ProductAdd = () => {
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    thumbnail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dummyjson.com/products", newProduct);
      console.log('Yeni Ürün:', response.data);
   
    } catch (error) {
      console.error('Ürün eklenirken bir hata oluştu:', error.message);
    }
  };

  return (
    <div>
      <h2>Ürün Ekle</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Başlık:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Açıklama:</label>
        <textarea
          id="description"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="thumbnail">Resim URL:</label>
        <input
          type="text"
          id="thumbnail"
          name="thumbnail"
          value={newProduct.thumbnail}
          onChange={handleChange}
        />

        <button type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default ProductAdd;

