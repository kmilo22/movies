import React, { useState } from "react";
import axios from "axios";

const AddMovie: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/movies", formData);
      alert("Movie added successfully");
    } catch (error) {
      alert("Error adding movie");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        onChange={(e) =>
          setFormData({ ...formData, price: e.target.value })
        }
      />
      <textarea
        placeholder="Description"
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Image URL"
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;