import React from 'react';
import { Card, Button  } from "flowbite-react";
import { addToDb, removeToDb } from './utilities';
const Cart = (props) => {
  const { id, index, picture, age, eyeColor, name, gender, company, email, phone } = props.cart;
const addToCart =(id)=> {
  addToDb(id);
}
const removeFromDb = (id)=>{

removeToDb(id)

}
  return (
<div className="max-w-sm">
  <Card>
    <div className="flex flex-col items-center pb-2">
      <img
        className="mb-3 h-24 w-24 rounded-full shadow-lg"
        src={picture}
        alt="Bonnie image"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {name}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
       {company}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400">
       {id}
      </span>
      <div className="mt-4 flex space-x-3 lg:mt-6">
      <span className="text-sm text-gray-500 dark:text-gray-400">
      {gender}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      {email}
      </span>
      </div>
      <div className="mt-4 flex space-x-3 lg:mt-6">
      <span className="text-sm text-gray-500 dark:text-gray-400">
      {phone}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      {age}
      </span>
      </div>
      <div className="mt-4 flex space-x-3 lg:mt-6">
      <span className="text-sm text-gray-500 dark:text-gray-400">
      {eyeColor}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      {index}
      </span>
      </div>
      <div className="mt-4 flex space-x-3 lg:mt-6">
        <Button onClick={()=> addToCart(id)}>Add friend</Button>
        <Button onClick={()=> removeFromDb(id)}>Remove</Button>
      </div>
    </div>
  </Card>
</div>
  );
};

export default Cart;