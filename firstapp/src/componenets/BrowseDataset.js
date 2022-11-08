//import { Search } from "@mui/icons-material";
import { InputAdornment, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../config";
const BrowseSlides = () => {
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "dataset/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setDatalist(data);
          setLoading(false);
        });
      }
    });
  };

  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);



  const displayData = () => {
    if (!loading) {
      return datalist.map(
        ({
          title,
          name,
          date,
          usability,
          content,
          image,
          description,
          _id,
        }) => (
          <div key={_id} class="col-md-12 col-lg-4 mb-4 mb-lg-0 ">


            <div className="card border border-primary border-4 mt-3">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <NavLink className="ripple" to={"/main/pptviewer/" + _id}>
                  <img
                    src={url+image}
                    class="card-img-top"
                    alt="Laptop"
                  />

                </NavLink>
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  <h5 class="mb-0 username">{name}</h5>
                  <h5 class="mb-0 username">{date}</h5>
                  <h5 class="mb-0 username">{usability}</h5>
                  <h5 class="mb-0 username">{content}</h5>
                </p>
                <button type="button" onClick={e => navigate("/view/" + _id)} className="btn btn-primary">
                  ViewData
                </button>
              </div>
              <div className="card-footer">2 days ago</div>
            </div>
          </div>


        )
      );
    }
  };

  const applyfilter = () => { };

  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: 2000, height: "300px" }}>
        <div className="row g-0">
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">About app</h5>
              <p className="card-text">
                Explore, analyze, and share quality data. Learn more about data types, creating, and collaborating.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>

          <div className="col-md-5">
            <img
              src="https://www.kaggle.com/static/images/datasets/Datasets_landing_illo.png"
              alt="Trendy Pants and Shoes"
              className="img-fluid rounded-start"
            />
          </div>
        </div>
      </div>
      <div className="input-group">
        <div className="form-outline " style={{ backgroundColor: " lightblue", width: "85%", marginLeft: "90px", height: "95px", borderRadius: "50px" }}>
          <input type="search" id="form1" className="form-control" />
          <label className="form-label" style={{marginLeft:"30px"}} htmlFor="form1">
            Search Datasets
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search" />
        </button>
      </div>






      <div class="col mb-3 mt-2" style={{ paddingTop: "2rem", }}>
        <div class="form-outline form">

          {/* <label for="state" > </label> */}

          {/* <input class="applyNowBtn" id="event-search" type="submit" name="searchevent" value="Search"></input> */}

          {/* <a href="#" class="adSearchLink">Advance Search </a>   */}



          {/* <header style={styles.header}> */}

          {/* <Typography className="text-center text-black" variant="h5">
          Neephur
        </Typography> */}
          {/* <div> */}

          {/* <Typography className="text-center text-black" variant="h2">
          No Code Website List 
        </Typography>
        <div className="input-group mt-5">
          <input
            className="form-control"
            value={filter}
            label="Search Here"
            onChange={(e) => setFilter(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "active.active", mr: 1, my: 0.5 }} />
                </InputAdornment>
              ),
            }}
          />
          
          <button
            className="btn btn-primary"
            onClick={applyfilter}
            type="submit"
          >
            Search
          </button>
        </div> */}
          {/* </div> */}
          {/* </header> */}
          <div className="container" >
            <div className="row">{displayData()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};


const styles = {
  header: {
    // background:
    //   "linear-gradient(to right, #0000009b, #000000ad), url(http://localhost:5000/images/browse_back.jpg)",
    padding: "2rem",
    textShadow: "2px 2px 3px #0000005c",
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  
  },
};

export default BrowseSlides;