import React from 'react';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import GridExample from '../.././Component/Card_List/Card_List'
import BasicPagination from '../.././Component/Pagination/Pagination'
function ProductList() {
  return (
    <>
      <NavBar />
      <div className="container">
      <GridExample />
      </div>
      <BasicPagination />
      <Footer />
    </>
  );
}

export default ProductList;
