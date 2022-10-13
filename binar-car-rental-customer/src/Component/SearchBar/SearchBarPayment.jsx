import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import "./style.css";

const useNavigateSearch = () => {
  const navigate = useNavigate();
  return (pathName, params) =>
    navigate(`${pathName}?${createSearchParams(params)}`);
};

function SearchBarPayment({
  carName,
  setCarName,
  carCategory,
  setCarCategory,
  carPrice,
  setCarPrice,
  carStatus,
  setCarStatus,
  setSearchParams,
}) {
  const navigateSearch = useNavigateSearch();
  const goToSearch = () =>
    navigateSearch("/search", {
      name: `${carName}`,
      category: `${carCategory}`,
      price: `${carPrice}`,
      status: `${carStatus}`,
    });

  const handleOnClick = (e) => {
    e.preventDefault();
    if (carName && carCategory && carPrice && carStatus) {
      goToSearch();
    } else alert("Semua Kolom Pencarian Harus Diisi");
  };

  return (
    <section
      id="searchBarPayment"
      className="mb-5 container "
      style={{ marginTop: "-120px" }}
    >
      <div className="section-step ">
        <ul className="stepper stepper-horizontal">
          <li className="completed">
            <img src="/Assets/1.png" alt="" />
            <span className="label">Pilih Metode</span>
          </li>

          <li className="active">
            <img src="/Assets/step.png" alt="" />
            <img src="/Assets/2.png" alt="" />
            <span className="label">Bayar</span>
          </li>

          <li className="warning">
            <img src="/Assets/step.png" alt="" />
            <img src="/Assets/3.png" alt="" />
            <span className="label">Tiket</span>
          </li>
        </ul>
      </div>
      <div className=" d-flex justify-content-center">
        <div className="row"></div>

        <div
          className="card p-3"
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", width: "100%" }}
        >
          <h4>Detail Pesananmu</h4>
            <div className="row mt-3">
              <div className="col-lg-3 d-flex flex-column justify-content-center">
                <label htmlFor="name">Nama/Tipe Mobil</label>
                <div className="text-secondary">
                    Innova
                </div>
              </div>

              <div className="col-lg-3 d-flex flex-column justify-content-center">
                <label htmlFor="category">Kategori</label>
                <div className="text-secondary">
                    6 - 8 orang
                </div>
              </div>

              <div className="col-lg-3 d-flex flex-column justify-content-center">
                <label htmlFor="price">Tanggal Mulai Sewa</label>
                <div className="text-secondary">
                    2 Juni 2022
                </div>
              </div>

              <div className="col-lg-2 d-flex flex-column justify-content-center">
                <label htmlFor="status">Tanggal Akhir Sewa</label>
                <div className="text-secondary">    
                    8 Juni 2022
                </div>
              </div>

              <div className="col-lg-1 d-flex align-items-end"></div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBarPayment;
