import app_config from "../config"
import { useState } from "react"
import Swal from "sweetalert2"
import { NavLink, useNavigate } from "react-router-dom"
import { Formik } from "formik"

function AddProduct({ setOpenAddPlatform }) {
  const url = app_config.api_url
  const [image, setImage] = useState("");
  const [selFile, setSelFile] = useState("");
  const [ProdFile, setProdFile] = useState("")
  const navigate = useNavigate()

  const productform = {
    title: "",
    name: "",
    usability: "",
    content: "",
    description: "",
    image: "",
    file: "",
  }
  const formSubmit = (values) => {
    values.image = image;
    values.file = selFile;
    console.log(values)

    const reqOp = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }

    fetch(url + "dataset/add", reqOp)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        if (data.message == "success") {
          Swal.fire({
            icon: "success",
            title: "Added Successfully!!",
          })
        }
      })
  }

  const uploadimage = (event) => {
    const formdata = new FormData()
    formdata.append("myfile", event.target.files[0])

    const reqOptions = {
      method: "POST",
      body: formdata,
    }

    fetch(url + "util/uploadfile", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setImage(event.target.files[0].name)
      })
  }
 
  const uploadFile = (event) => {
    const formdata = new FormData()
    formdata.append("myfile", event.target.files[0])

    const reqOptions = {
      method: "POST",
      body: formdata,
    }

    fetch(url + "util/uploadfile", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setSelFile(event.target.files[0].name)
      })
  }

  return (
    <>
      <div className="container mt-4" style={{ backgroundColor: "lightblue", border: "7px light blue", borderRadius: "25px" }}>
        <section className="panel panel-default">
          <div className="panel-heading">
          </div>
          <div className="card-body">
            <h3 className="panel-title mt-4">Add Product</h3>
            <Formik initialValues={productform} onSubmit={formSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit} action="designer-finish.html" className="form-horizontal" role="form">
                  {/* form-group // */}
                  <div className="form-group">
                    <label htmlFor="name" className="col-sm-3 control-label">
                      title
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="title"
                        onChange={handleChange}
                        value={values.title}
                      />
                    </div>
                  </div>{" "}
                  {/* form-group // */}
                  <div className="form-group">
                    <label htmlFor="name" className="col-sm-3 control-label">
                      name
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="name"
                        onChange={handleChange}
                        value={values.name}
                      />
                    </div>
                  </div>{" "}
                  {/* form-group // */}
                  <div className="form-group">
                    <label htmlFor="name" className="col-sm-3 control-label">
                      usability
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        id="usability"
                        placeholder="usability"
                        onChange={handleChange}
                        value={values.usability}
                      />
                    </div>
                  </div>{" "}
                  <div className="col-sm-12">
                    <label htmlFor="name" className="col-sm-3 control-label">
                      Date
                    </label>
                    <input type="date" className="form-control" id="date" placeholder="date" onChange={handleChange} value={values.date} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="col-sm-3 control-label">
                      content
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        id="content"
                        placeholder="content"
                        onChange={handleChange}
                        value={values.content}
                      />
                    </div>
                  </div>{" "}
                  <div className="form-group">
                    <label htmlFor="about" className="col-sm-3 control-label">
                      Description
                    </label>
                    <div className="col-sm-12">
                      <textarea
                        id="description"
                        type="text"
                        className="form-control"
                        defaultValue={""}
                        onChange={handleChange}
                        value={values.description}
                      />
                    </div>
                  </div>{" "}
                  {/* form-group // */}
                  <label className="mt-3">Upload Image</label>
                  <input
                    onChange={uploadimage}
                    type="file"
                    fullwidth
                    className="form-control mx-0"
                    title="Select heroimage"
                    required
                  />
                  <label className="mt-3">Upload File</label>
                  <input
                    onChange={uploadFile}
                    type="file"
                    fullwidth
                    className="form-control mx-0"
                    required
                  />
                  {/* form-group // */}
                  <hr />
                  <div className="form-group">
                    <div className="col-sm-offset-3 col-sm-9">
                      <button type="submit" className="btn btn-primary mb-3" style={{ height: "" }}>
                        Submit
                      </button>
                    </div>
                  </div>{" "}
                  {/* form-group // */}
                </form>
              )}
            </Formik>
          </div>
          {/* panel-body // */}
        </section>
        {/* panel// */}
      </div>{" "}
      {/* container// */}
    </>
  )
}
export default AddProduct
