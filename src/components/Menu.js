import React, { useState } from 'react';

export default function Menu() {
  const [activeTab, setActiveTab] = useState("all");

  const renderItems = (category) => {
    const allItems = [
      { category: "drinks", name: "Special Drinks 1", img: "images/img-01.jpg", price: "$7.79" },
      { category: "drinks", name: "Special Drinks 2", img: "images/img-02.jpg", price: "$9.79" },
      { category: "drinks", name: "Special Drinks 3", img: "images/img-03.jpg", price: "$10.79" },
      { category: "lunch", name: "Special Lunch 1", img: "images/img-04.jpg", price: "$15.79" },
      { category: "lunch", name: "Special Lunch 2", img: "images/img-05.jpg", price: "$18.79" },
      { category: "lunch", name: "Special Lunch 3", img: "images/img-06.jpg", price: "$20.79" },
      { category: "dinner", name: "Special Dinner 1", img: "images/img-07.jpg", price: "$25.79" },
      { category: "dinner", name: "Special Dinner 2", img: "images/img-08.jpg", price: "$22.79" },
      { category: "dinner", name: "Special Dinner 3", img: "images/img-09.jpg", price: "$24.79" },
    ];

    const filtered = category === "all" ? allItems : allItems.filter(item => item.category === category);

    return filtered.map((item, index) => (
      <div key={index} className="col-lg-4 col-md-6 special-grid">
        <div className="gallery-single fix">
          <img src={item.img} className="img-fluid" alt={item.name} />
          <div className="why-text">
            <h4>{item.name}</h4>
            <p>Sed id magna vitae eros sagittis euismod.</p>
            <h5>{item.price}</h5>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="all-page-title page-breadcrumb">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <h1>Special Menu</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Special Menu</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              </div>
            </div>
          </div>

          <div className="row inner-menu-box">
          <div className="col-3">
  <div className="nav flex-column nav-pills">
    <button
      style={{ border: "none" }}
      className={`nav-link mb-2 ${activeTab === "all" ? "active" : ""}`}
      onClick={() => setActiveTab("all")}
    >
      All
    </button>
    <button
      style={{ border: "none" }}
      className={`nav-link mb-2 ${activeTab === "drinks" ? "active" : ""}`}
      onClick={() => setActiveTab("drinks")}
    >
      Drinks
    </button>
    <button
      style={{ border: "none" }}
      className={`nav-link mb-2 ${activeTab === "lunch" ? "active" : ""}`}
      onClick={() => setActiveTab("lunch")}
    >
      Lunch
    </button>
    <button
      style={{ border: "none" }}
      className={`nav-link mb-2 ${activeTab === "dinner" ? "active" : ""}`}
      onClick={() => setActiveTab("dinner")}
    >
      Dinner
    </button>
  </div>
</div>




            <div className="col-9">
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <div className="row">
                    {renderItems(activeTab)}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
