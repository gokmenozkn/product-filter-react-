import React from 'react';
import { useState } from "react";
import './App.css';

/**
 * Components
 */
import Navbar from './components/Navbar'
import Sideleft from './components/Sideleft'
import Sideright from './components/Sideright'

// Import products
import products from './components/products';

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  function Filter(option) {

    /**
     * 
     * @param {Event} e 
     */
    function filterProdByStar(e) {
      var filtered;
      // var filtered = products.filter(prod => {;
      //   return prod.star < 4 && prod.star > 3 ;
      // });
  
      // if (e.target.checked) {
      //   setFilteredProducts(filtered);
      // } else {
      //   setFilteredProducts([]);
      // }
  
      // console.log(e.target.checked);
      /**
       * Check if star 4.5 or higher
       */
      if (option == "4.5 or higher") {
        if (e.target.checked) {
          
          if (filteredProducts.length) {
            filtered = filteredProducts.filter(prod => {
              return prod.star >= 4.5;
            });

            setFilteredProducts(filtered);
          } 

          filtered = products.filter(prod => {
            return prod.star >= 4.5;
          });
  
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts([]);
        }
      }

      /**
       * Check if star 4 - 4.5
       */
      if (option == "4 - 4.5") {
        if (e.target.checked) {

          if (filteredProducts.length) {
            filtered = filteredProducts.filter(prod => {
              return prod.star >= 4 && prod.star < 4.5;
            });
            setFilteredProducts(filtered);
          }

          filtered = products.filter(prod => {
            return prod.star > 4 && prod.star < 4.5;
          });

          setFilteredProducts(filtered);
        } else {
          setFilteredProducts([]);
        }
      }

      /**
       * Check if star 3 - 4
       */
      if (option == "3 - 4") {
        if (e.target.checked) {

          filtered = products.filter(prod => {
            return prod.star >= 3 && prod.star < 4;
          });

          setFilteredProducts(filtered);
        } else {
          setFilteredProducts([]);
        }
      }
    }

    /**
     * <p>
     *    Price filtering
     * </p>
     * @param {Event} e
     * @returns {void} 
     */
    function filterProdByPrice(e) {
      var filtered;
      // products.filter(prod => prod.price > 3000 && prod.price < 4000);

      // If opt = 3000 - 4000
      if (option == "3000 - 4000") {
        if (e.target.checked) {

          filtered = products.filter(prod => prod.price >= 3000 && prod.price <= 4000);

          setFilteredProducts(filtered);
        } else {
          setFilteredProducts([]);
        }
      }

      // If opt = 2000 - 3000
      if (option == "2000 - 3000") {
        if (e.target.checked) {

          filtered = products.filter(prod => prod.price >= 2000 && prod.price < 3000);

          setFilteredProducts(filtered);
        } else {
          setFilteredProducts([]);
        }
      }

      // If opt = 1000 - 2000
      if (option == "1000 - 2000") {
        if (e.target.checked) {

          filtered = products.filter(prod => prod.price >= 1000 && prod.price < 2000);

          setFilteredProducts(filtered);
        } else {
          setFilteredProducts([]);
        }
      }
    }
  
    /**
     * <p>
     *    Type filtering
     * </p>
     * @param {Event} e 
     * @returns {void}
     */
    function filterProdByType(e) {
      var filtered; 
      // products.filter(prod => prod.type == "desktop");
  
      // If opt = "Desktop"
      if (option == "Desktop") {
        if (e.target.checked) {

          filtered = products.filter(prod => prod.type == "desktop");

          setFilteredProducts(filtered);
        } else {
          setFilteredProducts([]);
        }
      }

      // If opt = "Laptop"
      if (option == "Laptop") {
        if (e.target.checked) {

          filtered = products.filter(prod => prod.type == "laptop");

          setFilteredProducts(filtered);
        } else {
          setFilteredProducts([]);
        }
      }

      // If opt = "Phone"
      if (option == "Phone") {
        if (e.target.checked) {

          filtered = products.filter(prod => prod.type == "phone");

          setFilteredProducts(filtered);
        } else {
          setFilteredProducts([]);
        }
      }

      // If opt = "Camera"
      if (option == "Camera") {
        if (e.target.checked) {

          filtered = products.filter(prod => prod.type == "camera");

          setFilteredProducts(filtered);
        } else {
          setFilteredProducts([]);
        }
      }
    }

    return {
      filterProdByPrice,
      filterProdByType,
      filterProdByStar
    }
  }


  return (
    <>
      <Navbar />

      <div className="auto-margin">
        <main className="main">
          <Sideleft
            Filter={Filter}
            />

          <Sideright filteredProducts={filteredProducts} />
        </main>
      </div>
    </>
  );
}

export default App;
