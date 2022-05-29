import React from "react";

const OrderList = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-wrap">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Tanggal Order Masuk</th>
                <th>Total Order</th>
                <th>Diskon</th>
                <th>Tax</th>
                <th>Total Product</th>
                <th>Total Quantity</th>
                <th>Payment Transaction Number</th>
                <th>Asal Kota</th>
                <th>Alamat</th>
                <th>Status Pesanan</th>
              </tr>
            </thead>
            {/* <tbody>
              {getListProductResult ? (
                getListProductResult.map((product, index) => {
                  return (
                    <>
                      <tr key={product.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{product.prod_name}</td>
                        <td>{product.prod_desc}</td>
                        <td>{product.prod_price}</td>
                        <td>{product.prod_stock}</td>
                        <td>{product.prod_expire}</td>
                        <td>{product.prod_weight}</td>
                        <td>{product.prod_category}</td>
                        <td>{product.prod_brand}</td>
                        <td>{product.prod_condition}</td>
                        <td>{product.prod_total_sold}</td>
                        <td>{product.prod_rating}</td>
                        <td>{product.prod_views}</td>
                        <td>
                          <button
                            onClick={() => dispatch(detailProduct(product))}
                            type="button"
                            className="btn btn-success"
                          >
                            <AiFillEdit></AiFillEdit>
                            <Link
                              to={`/product/edit/${product.id}`}
                              className="edit"
                            >
                              Edit
                            </Link>
                          </button>
                        </td>
                        <td>
                          <button
                            href="/product"
                            onClick={() => deleteHandler(product.id)}
                            type="button"
                            className="btn btn-success"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : getListProductLoading ? (
                <p>Loading...</p>
              ) : (
                <p>
                  {getListProductError ? getListProductError : "Data Kosong"}
                </p>
              )}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
