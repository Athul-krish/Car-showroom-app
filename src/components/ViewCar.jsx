import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./ViewCar.css";
import axios from "axios";

const ViewCar = () => {
const [data,changeData] = useState([])



    const fetchData= ()=>{
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/car-data.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
useEffect(
    ()=>{
        fetchData()
    },[]
)



  return (
    <div>
      <Navbar />
      <div className="container-fluid px-5 mt-4 mb-4">
        <div className="row">
          <div className="col-12">
            <div className="row g-4">
              {data.map((value) => (
                <div
                  className="col-12 col-sm-6 col-lg-4 col-xl-3"
                  key={value.carId}
                >
                  <div className="card h-100">

                    <img
                      src={value.image}
                      className="card-img-top"
                      height="100"
                      alt={value.brand}
                    />

                    <div className="card-body">

                      <h4 className="fw-bold mb-3">
                        {value.brand}
                      </h4>

                      <p><strong>Model:</strong> {value.model}</p>

                      <p><strong>Fuel Type:</strong> {value.fuelType}</p>

                      <p>
                        <strong>Price:</strong>
                        {Number(value.price)}
                      </p>

                      <p><strong>Color:</strong> {value.color}</p>

                      <p><strong>Year:</strong> {value.year}</p>

                      <button className="btn btn-primary w-100 mt-2">
                        View Details
                      </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCar;