import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDelete = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Ürün detayları getirilirken bir hata oluştu:', error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://dummyjson.com/products/${id}`);
      console.log('Ürün Silindi:', id);
    
      navigate('/'); 
      
    } catch (error) {
      console.error('Ürün silinirken bir hata oluştu:', error.message);
    }
  };

  return (
    <div>
      <h2>Ürün Sil</h2>
      {product ? (
        <div>
          <p>Ürün ID: {product.id}</p>
          <p>Başlık: {product.title}</p>
          <button onClick={handleDelete}>Sil</button>
        </div>
      ) : (
        <p>Ürün bulunamadı.</p>
      )}
    </div>
  );
};

export default ProductDelete;

