import React from 'react'
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate();
  // 1.create a function for form submit events
  const userSubmit = async (formdata) => {
    console.log(formdata)

    // code to save data to database
    // 1.url 
    // 2.request method 
    // 3.data to send 
    // 4.data format

    const response = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'content-type': 'application/json'
      }
    })
    // 200 status coad means success
    // 400 status coad means error on client
    // 500 status code means error on server

    console.log(response.status);
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "nice",
        text: "you are registered"
      })
      navigate('/login');
    } else {
      Swal.fire({
        icon: "error",
        title: "oops😒",
        text: "something went wrong"
      })
    }

  }
  return (
    <section className="vh-100" style={{ background: "url(https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=600)",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
  <div className="container h-90 ">
    <div className="row d-flex justify-content-center align-items-center h-95 ">
      <div className="col-lg-12 col-xl-11 mt-4">
        <div className="card text-black" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <Formik initialValues={{
                  name: '',
                  email: '',
                  password: '',
                  repeatpassword: '',
                }}
                  onSubmit={userSubmit} >
                  {({ values, handleChange, handleSubmit }) => (
                 <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={values.name} onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form3Example1c">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={values.email} onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form3Example3c">
                        Your Email
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={values.password} onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="repeatpassword"
                        className="form-control"
                        value={values.repeatpassword} onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form3Example4cd">
                        Repeat your password
                      </label>
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Register
                    </button>
                  </div>
                
                  </form>
                  )}
                </Formik>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Register