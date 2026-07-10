import React from "react";
import Navbar from "./Navbar";
import "./AddCar.css";

const AddCar = () => {
  return (
    <div>
      <Navbar />

      <div className="container mt-5 mb-5">

        <h2 className="text-center fw-bold text-primary mb-4">
          <u>Add New Car</u>
        </h2>

        <div className="row">
          <div className="col-12">

            <div className="row g-4">

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Car ID:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Car ID"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Brand:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Brand"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Model:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Model"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Fuel Type:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Fuel Type"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Transmission:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Transmission"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Price:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Price"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Color:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Color"
                />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Manufacturing Year:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Manufacturing Year"
                />
              </div>

              <div className="col-12">
                <label className="form-label">Image URL:</label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Paste Image URL"
                />
              </div>

              <div className="col-12">
                <label className="form-label">Description:</label>
                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Enter Description"
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-success px-5 py-2 fw-bold">Add Car</button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;