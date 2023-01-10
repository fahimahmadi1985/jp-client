import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Product from './Product';


function Products() {

  const [products, setProducts] = useState([]);
  // const [error, setError] = useState('');
  

  useEffect(() => {
    
    /** Fetch data from backend */
    axios('/api/products')
      .then((res) => { setProducts(res.data.data.products) })
      // .catch((err) => { setError(err.message) });

  }, []);

  return (
    <div className='d-flex flex-wrap justify-content-around'>
      {products && products.map((product, index) => ( <Product {...product} key={index} /> ))}
    </div>
  )
}

export default Products