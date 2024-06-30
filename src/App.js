import React, { useState, useEffect } from 'react';
import Files from "./Components/Files/Files";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  const initialUploadedItems = JSON.parse(localStorage.getItem('uploadedItems')) || [];
  const [uploadedItems, setUploadedItems] = React.useState(initialUploadedItems);
  const [searchValue, setSearchValue] = useState("");

  const handleAddItems = (items) => {
    console.log("new item", items)
    setUploadedItems((prevItems) => [...prevItems, ...items]);
  };
  useEffect(() => {
    const storedItems = localStorage.getItem('uploadedItems');
    if (storedItems) {
      setUploadedItems(JSON.parse(storedItems));
    }
  }, []);

  // Update localStorage whenever uploadedItems change
  useEffect(() => {
    localStorage.setItem('uploadedItems', JSON.stringify(uploadedItems));
  }, [uploadedItems]);

  console.log("uploaded files", uploadedItems)

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="App">
        <Navbar uploadedItem={uploadedItems} setUploadedItems={setUploadedItems} handleAddItems={handleAddItems} />
        <Files uploadedItem={uploadedItems} setUploadedItems={setUploadedItems} handleAddItems={handleAddItems} searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </>
  );
}

export default App;
