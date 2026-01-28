import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookById } from "../services/bookApi";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { state } = useLocation();
 useEffect(() => {
  if (state) {
    setBook(state);
  } else {
    getBookById(id).then(res => setBook(res.data));
  }
}, [id, state]);

  if (!book) return <p>Loading...</p>;
  

 

  return (
    <div>
     <h2>{book.title}</h2>
<p><b>Author : </b> {book.author}</p>
<p><b>Publisher:</b> {book.publisher}</p>
<p>{book.description}</p>

    </div>
  );
}

export default BookDetails;
