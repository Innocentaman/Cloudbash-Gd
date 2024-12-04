export async function fetchWidgetConfig(widgetId) {
    const response = await fetch(`http://localhost:3001/api/widgets/${widgetId}`);
    const config = await response.json();
    return config;
  }
  
  export async function fetchProducts(apiUrl) {
    const response = await fetch(apiUrl);
    const products = await response.json();
    return products;
  }
  