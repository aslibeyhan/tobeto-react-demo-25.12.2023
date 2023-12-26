import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Ürün detaylari getirilirken bir hata oluştu:', error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Ürün Detayı</h2>
      {product ? (
        <div>
          <p>Ürün ID: {product.id}</p>
          <p>Başlık: {product.title}</p>
          <p>Açıklama: {product.description}</p>
          <p>Resim URL: {product.thumbnail}</p>
        </div>
      ) : (
        <p>Ürün bulunamadı.</p>
      )}
    </div>
  );
};

export default ProductDetail;

