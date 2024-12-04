import React, { useEffect, useState } from 'react';
import { fetchWidgetConfig, fetchProducts } from '../services/api';
import './SimilarProducts.css';

const SimilarProducts = () => {
  const [products, setProducts] = useState([]);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    async function loadWidget() {
      const widgetConfig = await fetchWidgetConfig('widget-1');
      setConfig(widgetConfig);

      const productData = await fetchProducts(widgetConfig.api);
      const transformedProducts = productData.products.map((product) => ({
        image: product[widgetConfig.displayFields.image],
        name: product[widgetConfig.displayFields.name],
      }));
      setProducts(transformedProducts);
    }

    loadWidget();
  }, []);

  return (
    <div className="product-widget" style={{ color: config?.uiConfig?.color }}>
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SimilarProducts;
