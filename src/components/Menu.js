import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Menu() {
  const [activeTab, setActiveTab] = useState("all");
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({ 
    totalPages: 1,
    totalItems: 0
  });
  
  // Configure API base URL - use environment variable in production
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:7000';
  const baseURL = `${API_BASE_URL}/api/menu`;

  // Fetch menu items from backend
  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data } = await axios.get(baseURL, {
        params: {
          category: activeTab === "all" ? undefined : activeTab,
          page: currentPage,
          limit: 6,
        },
      });
      
      // Process image URLs to ensure they're complete
      const processedItems = data.menuItems.map(item => ({
        ...item,
        img: formatImageUrl(item.img, API_BASE_URL),
        price: parseFloat(item.price).toFixed(2) // Ensure proper price formatting
      }));
      
      setMenuItems(processedItems);
      setPagination(data.pagination);
    } catch (err) {
      console.error("Failed to fetch menu items:", err);
      setError("Failed to load menu items. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Helper function to ensure proper image URLs
  const formatImageUrl = (imgPath, baseUrl) => {
    if (!imgPath) return `${baseUrl}/images/default-food.jpg`;
    
    // If already a full URL, return as-is
    if (imgPath.startsWith('http')) return imgPath;
    
    // If path starts with /uploads, prepend base URL
    if (imgPath.startsWith('/uploads')) return `${baseUrl}${imgPath}`;
    
    // Default case - assume it's in the uploads directory
    return `${baseUrl}/uploads/${imgPath}`;
  };

  // Fetch data when tab or page changes
  useEffect(() => {
    fetchMenuItems();
  }, [activeTab, currentPage]);

  const handleTabClick = (category) => {
    setActiveTab(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const renderMenuItems = () => {
    if (loading) {
      return (
        <div className="col-12 text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading menu items...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="col-12 text-center py-5">
          <div className="alert alert-danger">
            {error}
            <button 
              className="btn btn-sm btn-outline-danger ms-3"
              onClick={fetchMenuItems}
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    if (menuItems.length === 0) {
      return (
        <div className="col-12 text-center py-5">
          <div className="alert alert-info">
            No menu items found in this category.
          </div>
        </div>
      );
    }

    return menuItems.map((item) => (
      <div key={item._id} className="col-lg-4 col-md-6 special-grid mb-4">
        <div className="gallery-single fix h-100">
          <div className="image-container" style={{ height: '200px', overflow: 'hidden' }}>
            <img 
              src={item.img} 
              className="img-fluid w-100 h-100 object-fit-cover"
              alt={item.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `${API_BASE_URL}/images/default-food.jpg`;
              }}
            />
          </div>
          <div className="why-text p-3">
            <h4 className="text-truncate">{item.name}</h4>
            {item.description && (
              <p className="text-muted small">{item.description}</p>
            )}
            <h5 className="text-primary mt-2">${item.price}</h5>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="menu-page">
      {/* Page Header */}
      <div className="all-page-title page-breadcrumb">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <h1>Special Menu</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="menu-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Special Menu</h2>
                <p className="text-muted">
                  Explore our delicious offerings. All dishes prepared with the finest ingredients.
                </p>
              </div>
            </div>
          </div>

          <div className="row inner-menu-box">
            {/* Category Navigation */}
            <div className="col-md-3 col-12">
              <div className="nav flex-column nav-pills">
                {["all", "drinks", "lunch", "dinner", "breakfast"].map((cat) => (
                  <button
                    key={cat}
                    className={`nav-link mb-2 text-start ${activeTab === cat ? 'active' : ''}`}
                    onClick={() => handleTabClick(cat)}
                  >
                    <i className={`fas fa-${getCategoryIcon(cat)} me-2`}></i>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <div className="col-md-9 col-12">
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <div className="row">
                    {renderMenuItems()}
                  </div>

                  {/* Pagination */}
                  {pagination.totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-4">
                      <nav aria-label="Menu pagination">
                        <ul className="pagination">
                          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button 
                              className="page-link" 
                              onClick={() => setCurrentPage(prev => prev - 1)}
                              disabled={currentPage === 1}
                            >
                              Previous
                            </button>
                          </li>
                          
                          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
                            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                              <button 
                                className="page-link" 
                                onClick={() => setCurrentPage(page)}
                              >
                                {page}
                              </button>
                            </li>
                          ))}
                          
                          <li className={`page-item ${currentPage === pagination.totalPages ? 'disabled' : ''}`}>
                            <button 
                              className="page-link" 
                              onClick={() => setCurrentPage(prev => prev + 1)}
                              disabled={currentPage === pagination.totalPages}
                            >
                              Next
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to get Font Awesome icons for categories
function getCategoryIcon(category) {
  switch(category) {
    case 'drinks': return 'wine-glass';
    case 'lunch': return 'hamburger';
    case 'dinner': return 'utensils';
    case 'breakfast': return 'egg';
    default: return 'list';
  }
}