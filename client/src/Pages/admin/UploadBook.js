import React, { useState } from "react";

//Xlsx
import * as XLSX from "xlsx";

//Components  from flowbite
import { Button, Label, Select, TextInput,FileInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
// import { FileInput, Label } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Articles",
    "Horror",
    "Religion",
    "Science",
  ];
  const [excelData,setExcelData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(bookCategories[0]);

  const CategoryHandler = (e) => {
    console.log(e.target.value);
    setCurrentCategory(e.target.value);
  };

  const handleBookSubmit = (e) => {
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
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Uploaded book successfully");
      });
  };

  const fileInputHandler = async(e)=>{

    const file = e.target.files[0];
    const data = await file.arrayBuffer(file);
    const excelFile = XLSX.read(data);
    const excelsheet = excelFile.Sheets[excelFile.SheetNames[0]]
    const excelJson = XLSX.utils.sheet_to_json(excelsheet)
    console.log(excelJson); 
    
    fetch(`${window.location.origin}/upload-books`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(excelJson),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Uploaded book successfully");
      });
   

  }

  return (
    <div className="px-10 py-20  w-[81%]">
      <h1 className="mb-8 text-3xl font-bold">Upload Book</h1>
      <form onSubmit={handleBookSubmit}>
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
                placeholder="Book Title"
                required
              />
            </div>
            {/* Author name input   */}
            <div className="w-[50%]">
              <div className="mb-2 block">
                <Label htmlFor="AuthorName" value="Author Name" />
              </div>
              <TextInput id="authorName" type="text" required />
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
                rows={5}
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full mt-5">
          Upload Book
        </Button>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="file-upload" value="Upload file" />
          </div>
          <FileInput onChange={fileInputHandler} id="file-upload" accept=".xlsx,.xls" />
        </div>
      </form>
    </div>
  );
};

export default UploadBook;
