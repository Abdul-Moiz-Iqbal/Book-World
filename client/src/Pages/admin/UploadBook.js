import React, { useRef, useState } from "react";

//Xlsx
import * as XLSX from "xlsx";

//Components  from flowbite
import { Button, Label, Select, TextInput, FileInput } from "flowbite-react";
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
  const languages = [
    "English",
    "Hindi",
    "Urdu",
    "Telegu",
    "Tamil",
    "Kannada",
    "Malayam",
  ];
  const fileRef = useRef();
  const [excelData, setExcelData] = useState([]);
  const [loading, setloading] = useState(false);
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
    fetch("http://localhost:8000/upload-book", {
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

  const fileInputHandler = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setExcelData(formData);
  };

  const onUploadHandler = async () => {
    setloading(true);
    try {
      const result = await fetch("http://localhost:8000/upload-books", {
        method: "POST",
        headers: {
          // No need to set Con tent-Type manually when using FormData
          // The browser will set it automatically to 'multipart/form-data'
        },
        body: excelData, // formData should be an instance of FormData
      });
      setloading(false);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file. Please try again.");
    }
    fileRef.current.value = "";
  };

  // const fileInputHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const data = await file.arrayBuffer(file);
  //   const excelFile = XLSX.read(data);
  //   const excelsheet = excelFile.Sheets[excelFile.SheetNames[0]];
  //   const excelJson = XLSX.utils.sheet_to_json(excelsheet);
  //   console.log(excelJson);

  //   fetch(`http://localhost:8000/upload-books`, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(excelJson),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       alert("Uploaded book successfully");
  //     });
  // };

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
          {/* Third  row */}
          <div className="w-full flex  gap-4">
            <div className="w-[50%]">
              <div className="  mb-2 block">
                <Label htmlFor="language" value="language" />
              </div>
              <Select id="language" placeholder="Book image url" required>
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </Select>
            </div>
            <div className="w-[50%]">
              <div className="mb-2 block">
                <Label htmlFor="publication" value="publication" />
              </div>

              <TextInput
                id="Ar Publishers"
                type="text"
                name="publication"
                className="w-full rounded"
              />
            </div>
          </div>
          {/* forth  row */}
          <div className="w-full flex  gap-4">
            <div className="w-[50%]">
              <div className="  mb-2 block">
                <Label htmlFor="Page" value="Page" />
              </div>
              <TextInput
                id="page"
                type="number"
                placeholder="Book Pages"
                required
              />
            </div>
            <div className="w-[50%]">
              <div className="mb-2 block">
                <Label htmlFor="isbn" value="ISBN" />
              </div>

              <TextInput
                id="isbn"
                type="number"
                name="isbn"
                className="w-full rounded"
              />
            </div>
          </div>
          {/* sixth  row */}
          <div className="w-full flex  gap-4">
            <div className="w-[50%]">
              <div className="  mb-2 block">
                <Label htmlFor="discount" value="Discount" />
              </div>
              <TextInput
                id="discount"
                type="number"
                placeholder="10%"
                required
              />
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
          <FileInput
            onChange={fileInputHandler}
            ref={fileRef}
            id="file-upload"
            accept=".xlsx,.xls"
          />
          <Button className="mt-5" onClick={onUploadHandler}>
            {loading ? (
              <>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              <span className="">Upload File</span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadBook;
