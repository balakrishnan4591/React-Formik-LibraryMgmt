import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useFormik } from "formik";
import * as Yup from "yup";
import { axiosService } from "../Utilities/Apiservices";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      isbn: "",
      pub: "",
      bookImg: "",
      about: "",
      name: "",
      birth: "",
      bio: "",
      authorImg: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Title is Required"),
      isbn: Yup.string()
        .required("ISBN number required")
        .matches(/^\d{13}$/, "Enter a valid 13 - Digit ISBN Number"),
      pub: Yup.date().required("Published date Required"),
      about: Yup.string().required("About Book is required"),
      bookImg: Yup.string().required("Image URL is required"),

      name: Yup.string().required("Author name is Required"),
      birth: Yup.date().required("birth date Required"),
      bio: Yup.string().required("Biography is required"),
      authorImg: Yup.string().required("Image URL is required"),
    }),
    onSubmit: async (values) => {
      try {
        let res = await axiosService.post("/books", values);
        if (res.status == 201) {
          navigate("/dashboard");
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form
      className="container mt-3 mb-3"
      style={{ maxWidth: "780px" }}
      onSubmit={formik.handleSubmit}
      id="form"
    >
      {" "}
      <div id="book_edit_section">
        <h1 className="text-xl font-bold underline" id="edit_title">
          Book Details
        </h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Book Title"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
            />
            {formik.touched.title && formik.errors.title ? (
              <div style={{ color: "red" }}>{formik.errors.title}</div>
            ) : null}
          </Form.Group>

          <Form.Group as={Col} controlId="formISBN">
            <Form.Label>ISBN</Form.Label>
            <Form.Control
              type="text"
              placeholder="ISBN number"
              name="isbn"
              onChange={formik.handleChange}
              value={formik.values.isbn}
              onBlur={formik.handleBlur}
            />
            {formik.touched.isbn && formik.errors.isbn ? (
              <div style={{ color: "red" }}>{formik.errors.isbn}</div>
            ) : null}
          </Form.Group>
          <Form.Group as={Col} controlId="formPublished">
            <Form.Label>Published</Form.Label>
            <Form.Control
              type="date"
              name="pub"
              onChange={formik.handleChange}
              value={formik.values.pub}
              onBlur={formik.handleBlur}
            />
            {formik.touched.pub && formik.errors.pub ? (
              <div style={{ color: "red" }}>{formik.errors.pub}</div>
            ) : null}
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formImg">
          <Form.Label>Book Cover Image</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            name="bookImg"
            onChange={formik.handleChange}
            value={formik.values.bookImg}
            onBlur={formik.handleBlur}
          />
          {formik.touched.bookImg && formik.errors.bookImg ? (
            <div style={{ color: "red" }}>{formik.errors.bookImg}</div>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAbout">
          <Form.Label>About</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter about book"
            rows={3}
            name="about"
            onChange={formik.handleChange}
            value={formik.values.about}
            onBlur={formik.handleBlur}
          />
          {formik.touched.about && formik.errors.about ? (
            <div style={{ color: "red" }}>{formik.errors.about}</div>
          ) : null}
        </Form.Group>
      </div>
      <div id="author_edit_section">
        <h1 className="text-xl font-bold underline" id="edit_title">
          Author Details
        </h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formAuthorName">
            <Form.Label>Author Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            ) : null}
          </Form.Group>
          <Form.Group as={Col} controlId="formAuthorBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="birth"
              onChange={formik.handleChange}
              value={formik.values.birth}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            ) : null}
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formAuthorImg">
          <Form.Label>Author Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author image URL"
            name="authorImg"
            onChange={formik.handleChange}
            value={formik.values.authorImg}
            onBlur={formik.handleBlur}
          />
          {formik.touched.authorImg && formik.errors.authorImg ? (
            <div style={{ color: "red" }}>{formik.errors.authorImg}</div>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBio">
          <Form.Label>Biography</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter biography"
            rows={3}
            name="bio"
            onChange={formik.handleChange}
            value={formik.values.bio}
            onBlur={formik.handleBlur}
          />
          {formik.touched.bio && formik.errors.bio ? (
            <div style={{ color: "red" }}>{formik.errors.bio}</div>
          ) : null}
        </Form.Group>
      </div>
      <div id="edit_btn">
        <Button className="btn bg-green-900" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default Create;
