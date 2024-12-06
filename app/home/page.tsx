// app/home/curd/page.tsx
"use client";
import React, { useState } from "react";

// Type for a simple item, you can expand this based on your requirements
interface Item {
  id: number;
  name: string;
}

const CurDPage = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);
  const [newItemName, setNewItemName] = useState<string>("");

  // Function to add an item
  const addItem = () => {
    if (newItemName) {
      const newItem: Item = {
        id: items.length + 1,
        name: newItemName,
      };
      setItems([...items, newItem]);
      setNewItemName("");
    }
  };

  // Function to delete an item
  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Curd Page</h1>
      <div>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Enter item name"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurDPage;
