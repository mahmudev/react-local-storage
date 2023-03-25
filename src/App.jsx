import React, { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";
import "./App.css";
import Cart from "./Components/Cart";
import Header from "./Components/Header";

function App() {
  const [cards, setcard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setcard(data));
  }, []);

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="px-3 md:lg:xl:px-10 py-5">
        <div className="gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:xl:grid-cols-5 group bg-white ">
          {cards.map((cart) => (
            <Cart cart={cart} key={cart.id}></Cart>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default App;
