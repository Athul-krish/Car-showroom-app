import React, { useState } from "react";
import Navbar from "./Navbar";
import "./ViewCar.css";

const ViewCar = () => {
  const [data] = useState([
    {
      carId: "CAR101",
      brand: "BMW",
      model: "X5",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "9500000",
      color: "Black",
      year: 2024,
      image:
        "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww",
    },
    {
      carId: "CAR102",
      brand: "Mercedes-Benz",
      model: "C-Class",
      fuelType: "Petrol",
      transmission: "Automatic",
      price: "6200000",
      color: "White",
      year: 2023,
      image:
        "https://img.magnific.com/premium-vector/blue-car-flat-style-illustration-isolated-white-background_108231-795.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      carId: "CAR103",
      brand: "Audi",
      model: "A6",
      fuelType: "Petrol",
      transmission: "Automatic",
      price: "6800000",
      color: "Grey",
      year: 2024,
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/200003/gravite-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
    },
    {
      carId: "CAR104",
      brand: "Toyota",
      model: "Fortuner",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "5200000",
      color: "Silver",
      year: 2023,
      image:
        "https://www.shutterstock.com/image-photo/car-running-on-road-city-260nw-2647951177.jpg",
    },
    {
      carId: "CAR105",
      brand: "Hyundai",
      model: "Creta",
      fuelType: "Petrol",
      transmission: "Manual",
      price: "1800000",
      color: "Blue",
      year: 2024,
      image:
        "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/NissanIntelligentChoice/4-Website-Page-1500x664-241224.jpg.ximg.l_full_m.smart.jpg",
    },
    {
      carId: "CAR106",
      brand: "Kia",
      model: "Seltos",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "2100000",
      color: "Red",
      year: 2024,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69-Ae9ceQL4O20-S2PEmSfMXLtrwOsd1Im0nPE-EMJxPABXPybFRRXujd&s=10",
    },
    {
      carId: "CAR107",
      brand: "Mahindra",
      model: "XUV700",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "2600000",
      color: "Black",
      year: 2024,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Q6MVmwKmu0PHS3tpScJ4G6sFFEkZ-RlyP6OSlT6xgPoehdFBYOVcePM&s=10",
    },
    {
      carId: "CAR108",
      brand: "BMW",
      model: "X5",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "2400000",
      color: "Orange",
      year: 2023,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/026/175/422/small/sport-car-model-photo.jpg",
    },
  ]);

  return (
    <div>
      <Navbar />

      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-12">
            <div className="row g-4">
              {data.map((value) => (
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-4"
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