import { useState, useEffect } from "react";

function BookForm({ onSave, selectedBook }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
    category: ""
  });


  useEffect(() => {
    if (selectedBook) {
      setFormData({
       title: selectedBook?.title || "",
        author: selectedBook?.author || "",
        price: selectedBook.price || "",
        quantity: selectedBook.quantity || "",
        category: selectedBook.category || ""
      });
    } else {
      setFormData({
        title: "",
        author: "",
        price: "",
        quantity: "",
        category: ""
      });
    }
  }, [selectedBook]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.author) {
      alert("Title and Author are required");
      return;
    }

    onSave(formData);

    setFormData({
      title: "",
      author: "",
      price: "",
      quantity: "",
      category: ""
    });
  };

 return (
  <div className="container mt-4">
    <div className="card p-4 shadow">
      <h3 className="text-center mb-4">
        {selectedBook ? "Edit Book" : "Add Book"}
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            name="price"
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            name="quantity"
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            {selectedBook ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  </div>
);

}

export default BookForm;
