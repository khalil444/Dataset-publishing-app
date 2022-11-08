
import { Formik } from "formik"
import React from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {

  const url = "http://localhost:5000";
  const navigate = useNavigate();

  const loginSubmit = async (formdata) => {
    console.log(formdata);

    const res = await fetch(url+'/user/authenticate', {
      method: 'POST',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' : 'application/json'
      }
    })

    if(res.status === 200){
      Swal.fire({
        icon : "success",
        title : "Welcome",
        text : "You are logged in"
      })
      navigate('/BrowseDataset');
    }else if(res.status === 400){
      Swal.fire({
        icon : "error",
        title : "Error",
        text : "Email or Password is incorrect"
      })
    }else{
      Swal.fire({
        icon : "error",
        title : "Error",
        text : "Something went wrong"
      })
    }
  }





  return (<section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
            <div className="card-body p-5 text-center">
              <h3 className="mb-5">Sign in</h3>
              <Formik initialValues={{ email: "", password: "" }} onSubmit={loginSubmit}>
                                    {({ values, handleChange, handleSubmit }) => (
                                        <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  onChange={handleChange} id="email" value={values.email}
                />
                <label className="form-label" htmlFor="typeEmailX-2">
                  Email
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  onChange={handleChange} id="password" value={values.password} 
                />
                <label className="form-label" htmlFor="typePasswordX-2">
                  Password
                </label>
              </div>
              {/* Checkbox */}
              <div className="form-check d-flex justify-content-start mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="password"
                  onChange={handleChange}  value={values.password} 
                />
                <label className="form-check-label" htmlFor="form1Example3">
                  {" "}
                  Remember password{" "}
                </label>
              </div>
              <button className="btn btn-primary btn-lg btn-block" type="submit">
                Login
              </button>
              <hr className="my-4" />
              <button
                className="btn btn-lg btn-block btn-primary"
                style={{ backgroundColor: "#dd4b39" }}
                type="submit"
              >
                <i className="fab fa-google me-2" /> Sign in with google
              </button>
              <button
                className="btn btn-lg btn-block btn-primary mb-2"
                style={{ backgroundColor: "#3b5998" }}
                type="submit"
              >
                <i className="fab fa-facebook-f me-2" />
                Sign in with facebook
              </button>
              
              </form>
                                    )}
                                </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login;