import React, { useState } from "react";
import { createProductApi } from "../../apis/Api";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");

  // image state
  const [productImage, setProductImage] = useState(null);
  const [previewImage, setPreviwImage] = useState(null);

  // function to upload and preview image
  const handleImageUpload = (event) => {
    // 0-file, 1-name, 2-size
    const file = event.target.files[0];
    setProductImage(file);
    setPreviwImage(URL.createObjectURL(file));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      productName,
      productPrice,
      productCategory,
      productDescription,
      productImage
    );

    // make a logical form data
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productCategory", productCategory);
    formData.append("productDescription", productDescription);
    formData.append("productImage", productImage);

    // make a api call/request
    createProductApi(formData)
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.data.message);
        } else {
          toast.error("Something went wrong in frontend");
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 400) {
            toast.error(error.response.data.message);
          }
          // space for 401 error
        } else if (error.response.status === 500) {
          toast.error("Internal server error");
        } else {
          toast.error("No response");
        }
      });
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mt-2">
          <h2>Admin Dashboard</h2>
          {/* <button className="btn btn-danger">Add product</button> */}

          <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Product
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Add Product
                  </h1>

                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form action="">
                    <label>Product Name</label>
                    <input
                      onChange={(e) => setProductName(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Product Name"
                    ></input>
                    <label className="mt-2">Product Price</label>
                    <input
                      onChange={(e) => setProductPrice(e.target.value)}
                      type="number"
                      className="form-control"
                      placeholder="Enter Your Product price"
                    ></input>
                    <div className="mt-2">
                      <label>Select Category</label>
                      <select
                        onChange={(e) => setProductCategory(e.target.value)}
                        className="form-control"
                      >
                        <option value="plants">Plants</option>
                        <option value="gadgets">Gadgets</option>
                        <option value="electronics">Electroniucs</option>
                        <option value="mobile">Mobile</option>
                      </select>
                    </div>
                    <label className="mt-2">Product Description</label>
                    <textarea
                      onChange={(e) => setProductDescription(e.target.value)}
                      className="form-control"
                    ></textarea>

                    <label className="mt-2">Product Image</label>
                    <input
                      onChange={handleImageUpload}
                      type="file"
                      className="form-control"
                    ></input>
                    {/* Preview image */}
                    {previewImage && (
                      <div className="">
                        <img
                          src={previewImage}
                          alt="previewImage"
                          className="img-fluid rounded object-fit-cover mt-3"
                        />
                      </div>
                    )}
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    class="btn btn-primary"
                  >
                    Add product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="table mt-2">
          <thead className="table-dark">
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Description</th>
              <th>Product Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="http://picsum.photos/50" alt="" />
              </td>
              <td>Flower</td>
              <td>122</td>
              <td>Flower for you</td>
              <td>Flower</td>
              <td>
                <div className="btn-group" role="group">
                  <button className="btn btn-success ">Edit</button>
                  <button className="btn btn-danger ">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
