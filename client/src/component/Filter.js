import { useState } from "react";

const BookFilter = (props) => {
  const bookCategories = [
    "All",
    "Fiction",
    "Articles",
    "Horror",
    "Art",
    "Religion",
    "Science",
  ];
  const authors = ["BSM MURTY", "DILIP SHRIPAD PHANSALKAR", "DEEPAK S. RAJA"];

  const publishers = [
    "Publisher 1",
    "Publisher 2",
    "Publisher 3",
    "Publisher 4",
  ];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedPublisher, setSelectedPublisher] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleCategoryChange = (event) => {
    const filter = event.target.value
    setSelectedCategory(filter);
    //if the category is filter = "All" then the all books stored in allBooks(usestate) in shop page will display without fetching books
    if(filter == "All"){
      return props.getFilteredData(filter)
    }

    // Fetch books based on selected category
    fetch(`http://localhost:5000/book?category=${event.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        // Update state with fetched books by category
        // console.log(data);
        props.getFilteredData(data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        // Handle errors here
      });

    filterBooks(
      event.target.value,
      selectedAuthor,
      selectedPublisher,
      searchText
    );
  };

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
    
    // console.log(selectedAuthor)
    // Implement filtering logic here based on the selected author
  };

  const handlePublisherChange = (event) => {
    setSelectedPublisher(event.target.value);
    
    // Implement filtering logic here based on the selected publisher
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // Implement filtering logic here based on the search text
  };

  const handleSearch = () => {
    // Implement more complex filtering logic when the Search button is clicked
    filterBooks(
      selectedCategory,
      selectedAuthor,
      selectedPublisher,
      searchText
    );
  };

  const filterBooks = (category, author, publisher, text) => {
    // Simulate filtering logic (replace with actual logic in your app)
    const filteredResults = []; // Replace with actual filtering based on selected filters
    setFilteredBooks(filteredResults);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Filter Books</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search books..."
          value={searchText}
          onChange={handleSearchChange}
          className="block w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      {/* Immediate Filter by Book Category */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium mb-1">
          Book Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="block w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select Category</option>
          {bookCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Filters for Author, Publisher, and Search */}
      <div className="flex flex-col space-y-4">
        {/* Filter by Author */}
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium mb-1">
            Author:
          </label>
          <select
            id="author"
            value={selectedAuthor}
            onChange={handleAuthorChange}
            className="block w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select Author</option>
            {authors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by Publisher */}
        <div className="mb-4">
          <label htmlFor="publisher" className="block text-sm font-medium mb-1">
            Publisher:
          </label>
          <select
            id="publisher"
            value={selectedPublisher}
            onChange={handlePublisherChange}
            className="block w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select Publisher</option>
            {publishers.map((publisher) => (
              <option key={publisher} value={publisher}>
                {publisher}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full py-2 mt-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300"
      >
        Search
      </button>

      {/* Display Filtered Results */}
      {/* ... (Display filtered results using 'filteredBooks' state) */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Filtered Results</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book, index) => (
            <div key={index} className="border p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                Author: {book.author}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Category: {book.category}
              </p>
              {/* Add more details here as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookFilter;
