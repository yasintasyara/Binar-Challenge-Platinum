import { current } from "@reduxjs/toolkit";
import React, { Fragment } from "react";
import { useState } from "react";
import SearchBarPayment from "../SearchBar/SearchBarPayment";
import "./detailPayment.css";

function DetailPaymentSection() {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
    setIsActive2(false);
    setIsActive3(false);
  };

  const handleClick2 = () => {
    setIsActive2((current) => !current);
    setIsActive(false);
    setIsActive3(false);
  };

  const handleClick3 = () => {
    setIsActive3((current) => !current);
    setIsActive2(false);
    setIsActive(false);
  };

  const checkButtonPayment = () => {
    return isActive == true || isActive2 == true || isActive3 == true
      ? false
      : true;
  };

  return (
    <>
      <SearchBarPayment />
      <section className="mb-5" id="detailPayment">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-6 card py-4 payment-card h-auto">
              <h5>Pilih Bank Transfer</h5>
              <p>
                Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
                atau Mobile Banking
              </p>
              <ul
                className="list-group list-group-flush"
                style={{ border: "none" }}
              >
                <li className="list-group-item flex">
                  <button
                    onClick={handleClick}
                    className={isActive ? "button-bank active" : "button-bank"}
                  >
                    <div className="d-flex align-items-center">
                      <div className="bank-text">BCA</div>
                      <div className="bank-text-info">BCA Transfer</div>
                    </div>
                  </button>
                </li>
                <li className="list-group-item ">
                  <button
                    onClick={handleClick2}
                    className={isActive2 ? "button-bank active" : "button-bank"}
                  >
                    <div className="d-flex align-items-center">
                      <div className="bank-text">BNI</div>
                      <div className="bank-text-info">BNI Transfer</div>
                    </div>
                  </button>
                </li>
                <li className="list-group-item">
                  <button
                    onClick={handleClick3}
                    className={isActive3 ? "button-bank active" : "button-bank"}
                  >
                    <div className="d-flex align-items-center">
                      <div className="bank-text">Mandiri</div>
                      <div className="bank-text-info">Mandiri Transfer</div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-5 card payment-card">
              <div className="detail-payment">
                <div className="detail-payment-item">
                  <h4>Innova</h4>
                </div>
                <div className="detail-payment-description">
                  <div className="header-detail d-flex justify-content-between">
                    <h5>Total</h5>
                    <h5>Rp. 3.500.000</h5>
                  </div>
                </div>
                <div className="content-detail mt-3">
                  <div className="content-detail-section">
                    <h5>Harga</h5>

                    <ul className="lh-lg" style={{ listStyleType: "disc" }}>
                      <li className="d-flex justify-content-between mb-1">
                        <p className="">Sewa Mobil Rp.500.000 X 7 Hari</p>
                        <p className="">Rp. 3.500.000</p>
                      </li>
                    </ul>
                  </div>
                  <div className="content-detail-section">
                    <h5>Biaya Lainnya</h5>
                    <ul className="lh-lg" style={{ listStyleType: "disc" }}>
                      <li className="d-flex justify-content-between mb-1">
                        <p className="">Pajak</p>
                        <p className="text-green">Termasuk</p>
                      </li>
                      <li className="d-flex justify-content-between mb-1">
                        <p className="">Biaya Makan Supir</p>
                        <p className="text-green">Termasuk</p>
                      </li>
                    </ul>
                  </div>
                  <div className="content-detail-section">
                    <h5>Belum Termasuk</h5>
                    <ul className="lh-lg" style={{ listStyleType: "disc" }}>
                      <li className="d-flex justify-content-between mb-1">
                        <p className="">Bensin</p>
                      </li>
                      <li className="d-flex justify-content-between mb-1">
                        <p className="">Tol dan Parkir</p>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className="total-payment">
                    <div className="d-flex justify-content-between my-3">
                      <h5>Total</h5>
                      <h5>Rp. 3.500.000</h5>
                    </div>
                    <button
                      type="button"
                      disabled={checkButtonPayment()}
                      className={
                        "cst-button" +
                        (checkButtonPayment() == true ? " disabled" : "")
                      }
                    >
                      Bayar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailPaymentSection;
