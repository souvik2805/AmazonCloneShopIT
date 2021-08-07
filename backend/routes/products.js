const express = require("express");
const router = express.Router();

const {
  newProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");

const {
  isAuthenticatedUser,
  authorizationRoles,
} = require("../middlewares/auth");

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);

router
  .route("/admin/products/new")
  .post(isAuthenticatedUser, authorizationRoles("admin"), newProduct);
router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, authorizationRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizationRoles("admin"), deleteProduct);

router.route("/review").put(isAuthenticatedUser, createProductReview);
router.route("/reviews").get(isAuthenticatedUser, getProductReviews);
router.route("/reviews").delete(isAuthenticatedUser, deleteReview);

module.exports = router;
