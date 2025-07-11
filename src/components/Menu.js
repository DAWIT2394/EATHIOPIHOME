import React, { useState } from 'react';

export default function Menu() {
  const [activeTab, setActiveTab] = useState("all");

  const renderItems = (category) => {
    const allItems = [
      { category: "drinks", name: "Special Drinkssdsd 1", img: "images/img-01.jpg", price: "$745.79" },
      { category: "drinks", name: "Special Drinks 2", img: "images/img-02.jpg", price: "$9.79" },
      { category: "drinks", name: "Special Drinks 3", img: "images/img-03.jpg", price: "$10.79" },
      { category: "lunch", name: "Special Lunch 1", img: "images/img-04.jpg", price: "$15.79" },
      { category: "lunch", name: "Special Lunch 2", img: "images/img-05.jpg", price: "$18.79" },
      { category: "lunch", name: "Special Lunch 3", img: "images/img-06.jpg", price: "$20.79" },
      { category: "dinner", name: "Special Dinner 1", img: "images/img-07.jpg", price: "$25.79" },
      { category: "breakfast", name: "Special breakfast 1", img: "images/img-07.jpg", price: "$25.79" },

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
            {/* <p>Sed id magna vitae eros sagittis euismod.</p> */}
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
                <p>Explore the vibrant dishes and cultural moments in our Gallery to see what makes Eathiopian Restaurant truly special.</p>

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
    <button
      style={{ border: "none" }}
      className={`nav-link mb-2 ${activeTab === "breakfast" ? "active" : ""}`}
      onClick={() => setActiveTab("breakfast")}
    >
      Breakfast
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
// }
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Menu() {
//   const [activeTab, setActiveTab] = useState("all");
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pagination, setPagination] = useState({ totalPages: 1 });
//   const baseURL = "http://localhost:7000/api/menu"; // Change if deployed

//   // Fetch data from backend
//   const fetchMenuItems = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get(baseURL, {
//         params: {
//           category: activeTab,
//           page: currentPage,
//           limit: 6,
//         },
//       });
//       setMenuItems(data.menuItems);
//       setPagination(data.pagination);
//     } catch (err) {
//       console.error("Fetch failed", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMenuItems();
//   }, [activeTab, currentPage]);

//   const handleTabClick = (category) => {
//     setActiveTab(category);
//     setCurrentPage(1);
//   };

//   const renderItems = () => {
//     if (loading) return <p className="text-center w-100">Loading...</p>;
//     if (!menuItems.length) return <p className="text-center w-100">No items found.</p>;

//     return menuItems.map((item, index) => (
//       <div key={item._id || index} className="col-lg-4 col-md-6 special-grid">
//         <div className="gallery-single fix">
//           <img src={item.img} className="img-fluid" alt={item.name} />
//           <div className="why-text">
//             <h4>{item.name}</h4>
//             <h5>${parseFloat(item.price).toFixed(2)}</h5>
//           </div>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <div className="all-page-title page-breadcrumb">
//         <div className="container text-center">
//           <div className="row">
//             <div className="col-lg-12">
//               <h1>Special Menu</h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="menu-box">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="heading-title text-center">
//                 <h2>Special Menu</h2>
//                 <p>Explore the vibrant dishes and cultural moments in our Gallery to see what makes Eathiopian Restaurant truly special.</p>
//               </div>
//             </div>
//           </div>

//           <div className="row inner-menu-box">
//             {/* Left: Category Tabs */}
//             <div className="col-3">
//               <div className="nav flex-column nav-pills">
//                 {["all", "drinks", "lunch", "dinner"].map((cat) => (
//                   <button
//                     key={cat}
//                     style={{ border: "none" }}
//                     className={`nav-link mb-2 ${activeTab === cat ? "active" : ""}`}
//                     onClick={() => handleTabClick(cat)}
//                   >
//                     {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Right: Menu Items */}
//             <div className="col-9">
//               <div className="tab-content">
//                 <div className="tab-pane fade show active">
//                   <div className="row">
//                     {renderItems()}
//                   </div>

//                   {/* Pagination */}
//                   <div className="d-flex justify-content-between align-items-center mt-4">
//                     <button
//                       className="btn btn-outline-secondary"
//                       disabled={currentPage === 1}
//                       onClick={() => setCurrentPage((prev) => prev - 1)}
//                     >
//                       Previous
//                     </button>
//                     <span>Page {currentPage} of {pagination.totalPages}</span>
//                     <button
//                       className="btn btn-outline-secondary"
//                       disabled={currentPage === pagination.totalPages}
//                       onClick={() => setCurrentPage((prev) => prev + 1)}
//                     >
//                       Next
//                     </button>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
