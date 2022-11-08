import { lightBlue, lightGreen } from '@mui/material/colors'
import { height } from '@mui/system'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="card" style={{ width: "100%", background: "url(https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=600)", blur: "blur(1)", backgroundRepeat: 'no-repeat', backgroundSize: "cover", height: "23rem", }}>
        <div className="card-body">
          <h5 className="card-title text-white" >DataGig</h5>
          <h6 className="card-subtitle mb-2 " style={{ color: "white" }}>About app</h6>
          <p className="card-text" style={{ color: "white" }}>
            DataGig is aimed at data journalists, museum curators, archivists, local governments, scientists, researchers and anyone else who has data that they wish to share with the world. It is part of a wider ecosystem of dedicated to making working with structured data as productive as possible.This app offers a no-setup, customizable, Jupyter Notebooks environment. Access GPUs at no cost to you and a huge repository of community published data and code.



          </p>
          <a href="/Register" className="card-link text-warning">
            Register
          </a>
          <a href="/Login" className="card-link text-warning">
            Login
          </a>
        </div>
      </div>

      <div className="card mb-1" style={{ maxWidth: "100%", }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/42065395708/original/gAK3--R_stlZ6yQX1UEek0JbrSuUgKf1Qg.png?1620325798"
              alt="dataset image"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8" style={{ backgroundColor: "lightgreen" }}>
            <div className="card-body">
              <h5 className="card-title">Start with more than you think </h5>
              <p className="card-text">
                DataGig is a tool for exploring and publishing data. It helps people take data of any shape, analyze and explore it, and publish it as an interactive website and accompanying API.

              </p>
              <h5>Inside DataGig you’ll find all the code  data you need to do your data science work. Use public datasets and get public notebooks atmosphere to conquer any analysis in no time.</h5>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <>
        {/* Footer */}
        <footer className="text-center text-lg-start bg-secondary text-light">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3" />
                    DataGig
                  </h6>
                  <p>
                    Have an account.?
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="/AddDataset" className="text-reset">
                      AddDataset
                    </a>
                  </p>
                  <p>
                    <a href="/BrowseDataset" className="text-reset">
                      BrowseDataset
                    </a>
                  </p>
                  <p>
                    <a href="/viewDataset" className="text-reset">
                      ViewDataset
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Laravel
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="/Login" className="text-reset">
                      Login
                    </a>
                  </p>
                  <p>
                    <a href="/AddDataset" className="text-reset">
                      AddDataset
                    </a>
                  </p>
                  <p>
                    <a href="/BrowseDataset" className="text-reset">
                      BrowseDataset
                    </a>
                  </p>
                  <p>
                    <a href="/ViewDataset" className="text-reset">
                      ViewDataset
                    </a>
                  </p>

                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3" /> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3" /> + 01 234 567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2022 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              DataGig .inc
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </>


    </div>
  )
}

export default Home