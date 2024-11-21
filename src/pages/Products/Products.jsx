import { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/getAllProducts';
import ProductList from '../../components/ProductList/ProductList';
import Navbar from '../../components/Navbar/Navbar';
import RadioButton from '../../components/RadioButton/RadioButton';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const allProducts = getAllProducts();
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  useEffect(() => {
    let updatedProducts = products;

    if (selectedCategory !== 'all') {
      updatedProducts = updatedProducts.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategory, searchTerm, products]);

  const RadioButtonOpts = [
    { label: 'All', value: 'all' },
    { label: 'Graphics Card', value: 'Graphics Card' },
    { label: 'Other', value: 'Other' },
  ];

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Navbar />

      <div className='px-24 py-4 flex flex-col items-center'>
        <h1 className='text-4xl font-bold mb-4 text-white-500'>Welcome to Our Product Store</h1>
        <input 
          type="text" 
          placeholder="Search for products..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className="px-4 py-2 border border-gray-300 rounded mb-4"
        />
        <div className='flex gap-2 mb-4'>
          <RadioButton 
            options={RadioButtonOpts} 
            defaultValue={'all'} 
            onChange={handleCategoryChange} 
          />
        </div>
        <section className='container px-24 py-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <ProductList products={filteredProducts} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Products;