import React, { useState } from "react";

import { useLoaderData, useParams,useNavigate } from "react-router-dom";

import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { Textarea } from "flowbite-react";

const EditBooks = () => {
    const {id} = useParams();
    const {title,author,imageUrl,category,description} = useLoaderData();
    const navigate = useNavigate();
     
  
    const bookCategories = [
        "Fiction",
        "Articles",
        "Horror",
        "Art",
        "History",
        "Religion",
        "Science",
      ];

      const index = bookCategories.findIndex((categoryName) => categoryName === category);
      
      const [currentCategory, setCurrentCategory] = useState(bookCategories[index]);
    
      const CategoryHandler = (e) => {
        console.log(e.target.value);
        setCurrentCategory(e.target.value);
      };
    
      const handleUpdateBook = (e) => {
        e.preventDefault();
        const form = e.target;
    
        const title = e.target.bookTitle.value;
        const author = e.target.authorName.value;
        const imageUrl = e.target.imageUrl.value;
        const category = e.target.inputState.value;
        const description = e.target.bookDescription.value;
    
        const bookObj = {
          title,
          author,
          imageUrl,
          category,
          description,
        };
        fetch(`http://localhost:5000/book/${id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(bookObj),
        }).then(res=> res.json()).then(data => {
            alert("Updated   book successfully")
            // navigate('/admin/dashboard/manage')
        });
      };
      return (
        <div className="px-10 py-20  w-[81%]">
          <h1 className="mb-8 text-3xl font-bold">Update Book</h1>
          <form onSubmit={handleUpdateBook}>
            <div>
              {/* first row */}
              <div className="w-full flex  gap-4">
                {/* book Tile input */}
                <div className="w-[50%]">
                  <div className="  mb-2 block">
                    <Label htmlFor="Book Titile" value="Book Title" />
                  </div>
                  <TextInput
                    id="bookTitle"
                    type="text"
                    defaultValue={title}
                    required
                  />
                </div>
                {/* Author name input   */}
                <div className="w-[50%]">
                  <div className="mb-2 block">
                    <Label htmlFor="AuthorName" value="Author Name" />
                  </div>
                  <TextInput id="authorName" type="text" defaultValue={author} required />
                </div>
              </div>
              {/* second row */}
              <div className="w-full flex  gap-4">
                <div className="w-[50%]">
                  <div className="  mb-2 block">
                    <Label htmlFor="imageUrl" value="imageUrl" />
                  </div>
                  <TextInput
                    id="imageUrl"
                    type="url"
                    placeholder="Book image url"
                    defaultValue={imageUrl}
                    required
                  />
                </div>
                <div className="w-[50%]">
                  <div className="mb-2 block">
                    <Label htmlFor="inputState" value="Book Category" />
                  </div>
    
                  <Select
                    id="inputState"
                    name="categoryName"
                    value={currentCategory}
                    
                    onChange={CategoryHandler}
                    className="w-full rounded"
                  >
                    {bookCategories.map((bookCategory) => (
                      <option key={bookCategory} value={bookCategory}>
                        {bookCategory}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              {/* book description */}
              <div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="Book Description" value="Book Description" />
                  </div>
                  <Textarea
                    id="bookDescription"
                    name="bookDescription"
                    placeholder="Write your book description..."
                    required
                    defaultValue={description}
                    rows={5}
                  />
                </div>
              </div>
            </div>
    
            <Button type="submit" className="w-full bg-cyan-700 mt-5">
              Update Book
            </Button>
          </form>
        </div>
      );
};

export default EditBooks;
