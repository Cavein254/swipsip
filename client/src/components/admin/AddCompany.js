import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import Axios from "axios";

const AddCompany = () => {
  const { dispatch } = useContext(UserContext);
  const initialState = {
    company: "",
    err: "",
  };
  const [company, setCompany] = useState(initialState);

  const handleChange = (e) => {
    setCompany({ company: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    const data = { conpany_name: company.company };

    Axios.post("http://localhost:5000/api/user/addcompany", data)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((data) => {
        if (data.isAuth) {
          console.log(data);
          dispatch({
            type: "ADD_COMPANY",
            payload: data,
          });
        } else {
          setCompany({
            ...company,
            err: data.msg,
          });
        }
      });
  };
  return (
    <div>
      <Form>
        <h2 ClassName="formheader">Add Company</h2>
        <Form.Group controlId="formBasicText">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            value={company.company}
            placeholder="Enter Company Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddCompany;
