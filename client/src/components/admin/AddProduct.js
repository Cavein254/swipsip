import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
const AddProduct = () => {
  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    Axios.post("/Uploads", formData, {
      headers: {
        enctype: "multipart/form-data",
      },
    }).then((res) => {
      console.log(res.data);
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    });
  };

  return (
    <div>
      <h2 ClassName="formheader text-center">Add Product</h2>
      <form>
        <div className="custom-file">
          <input
            name="productpic"
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {fileName}
          </label>
        </div>
        <input
          type="button"
          onClick={handleOnClick}
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h6 className="text-center text-muted">{uploadedFile.fileName}</h6>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} />
          </div>
        </div>
      ) : (
        <p>{uploadedFile.filePath}</p>
      )}
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Product Name" name="title" />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type i.e. wine, beer, liquor"
            name="title"
          />
        </Form.Group>
        <Form.Group controlId="formBasicTextBox">
          <Form.Label>Description</Form.Label>
          <Form.Control type="textbox" placeholder="Product Description" />
        </Form.Group>
        <Form.Group controlId="formBasicNumber">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter Price" />
        </Form.Group>
        <Form.Group controlId="formBasicNumber">
          <Form.Label>In Stock</Form.Label>
          <Form.Control type="number" placeholder="Total in Stock" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Company </Form.Label>
          <Form.Control type="text" placeholder="Company Dropdown" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
