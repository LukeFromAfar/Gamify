const express = require("express");
const router = express.Router();
const reviewController = require("../controller/reviewController");
const verifyToken = require("../middleware/verifyToken");

router.post("/:gameId", verifyToken,reviewController.createReview);
router.get("/games/:id", reviewController.getReviewsByGame);
router.get("/user/:id", reviewController.getReviewsByUser);

router.get("/:id", reviewController.getReview);
router.delete("/:id", reviewController.deleteReview);

module.exports = router;