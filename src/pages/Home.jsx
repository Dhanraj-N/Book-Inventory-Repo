import { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import BookTable from "../components/BookTable";
import { getBooks } from "../services/bookApi";

function Home() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);



useEffect(() => {
  getBooks()
    .then(res => setBooks(res.data))
    .catch(err => console.error(err));
}, []);


 const handleSave = (formData) => {
  if (selectedBook) {

    setBooks(prev =>
      prev.map(book =>
        book.id === selectedBook.id
          ? {
              ...book,
              title: formData.title,
              author: formData.author,
              publisher: book.publisher || "Self",
              price: formData.price,
              quantity: formData.quantity,
              category: formData.category
            }
          : book
      )
    );
  } else {

    const newBook = {
      id: Date.now(),
      title: formData.title,
      author: formData.author,
      publisher: "Self",
      price: formData.price,
      quantity: formData.quantity,
      category: formData.category
    };

    setBooks(prev => [...prev, newBook]);
  }

  setSelectedBook(null);
};


 
  const handleEdit = (book) => {
    setSelectedBook(book);
  };


  const handleDelete = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  return (
    <>
      <BookForm onSave={handleSave} selectedBook={selectedBook} />
      <BookTable
        books={books}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
}

export default Home;
