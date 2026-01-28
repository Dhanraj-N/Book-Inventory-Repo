import { useNavigate } from "react-router-dom";

function BookTable({ books, onEdit, onDelete }) {
  const navigate = useNavigate();

 return (
  <div className="table-responsive" style={{ maxHeight: "400px" }}>
    <table className="table table-bordered table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Publisher</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {books.length === 0 ? (
          <tr>
            <td colSpan="7" className="text-center">
              No books available
            </td>
          </tr>
        ) : (
          books.map((book) => (
            <tr key={book.id}>
              <td
                style={{ cursor: "pointer", color: "#0d6efd" }}
                onClick={() =>
                  navigate(`/book/${book.id}`, { state: book })
                }
              >
                {book.title}
              </td>

              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.price}</td>
              <td>{book.quantity}</td>
              <td>{book.category}</td>

              <td>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => onEdit(book)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

}

export default BookTable;
