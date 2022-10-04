import React from "react";
import MyTimer from "./Timer";


export const copy

const PaymentSection = () => {
  return (
    <section className="mb-5" id="carDetail">
      <div className="container">
        <div className="row d-flex flex-row-reverse justify-content-evenly mx-1">
          <div className="col-lg-4">
            <div className=" row-4 card p-3 d">
              <div className="col p-5">Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</div>
              <button onClick={""}>konfirmasi pembayaran</button>
            </div>
          </div>
          <div className="col-lg-7 p-4">
            <div className="row-lg-7 card p-4 mb-3">
              Selesaikan Pembayaran Sebelum
              <MyTimer />
            </div>
            <div className="row-lg-7 card p-4">
              Lakukan Transfer Ke
              <div className="row d-flex justify-content-evenly mx-1">
                <div className="col-1 d-flex card" style={{ fontSize: "12px" }}>
                  BCA
                </div>
                <div className="col-10">BCA Transfer a/n Binar</div>
              </div>
              
<input id="foo" value="https://github.com/zenorocha/clipboard.js.git"/>


<button class="btn" data-clipboard-target="#foo">
    <img src="../../../public/Assets/copyicon.svg" alt="Copy to clipboard"/>
    
</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
