import React from 'react';

export default function Sideleft({ Filter }) {
  return (
    <div className="side-left">
      <h5>Star</h5>
      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" onClick={Filter("4.5 or higher").filterProdByStar} />
            4.5 or higher
          </label>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" onClick={Filter("4 - 4.5").filterProdByStar} />
            4 - 4.5
          </label>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" onClick={Filter("3 - 4").filterProdByStar} />
            3 - 4
          </label>
        </li>
      </ul>

      <h5>Price</h5>
      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" onClick={Filter("3000 - 4000").filterProdByPrice} />
            3000$ - 4000$
          </label>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" onClick={Filter("2000 - 3000").filterProdByPrice} />
            2000$ - 3000$
          </label>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" onClick={Filter("1000 - 2000").filterProdByPrice} />
            1000$ - 2000$
          </label>
        </li>
      </ul>

      <h5>Products</h5>
      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" onClick={Filter("Desktop").filterProdByType} />
            Desktop
          </label>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" onClick={Filter("Laptop").filterProdByType} />
            Laptop
          </label>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" onClick={Filter("Phone").filterProdByType} />
            Phone
          </label>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" onClick={Filter("Camera").filterProdByType} />
            Camera
          </label>
        </li>
      </ul>
    </div>
  )
};