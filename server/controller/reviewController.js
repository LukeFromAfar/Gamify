const Review = require("../models/ReviewSchema");
const Game = require("../models/GamesSchema");

const reviewController = {
  createReview: async (req, res) => {
    const { gameId } = req.params;
    const { comment, recommended, stars } = req.body;
    const email = req.user.email;
    let userId = req.user.id;
    console.log(req.user);

    try {
      console.log(req.body);
      // const user = await User.findOne({ email });

      const review = await Review.create({
        user: userId,
        game: gameId,
        comment,
        recommended,
        stars,
      });
      // review.save();

      if (review) {
        const updateGame = await Game.findByIdAndUpdate(gameId, {
          $push: { reviews: review._id },
        });

        res.status(201).send({ msg: "Review created", review });
      } else {
        res.status(500).send({ msg: "Error creating review" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
  getReviewsByGame: async (req, res) => {
    const { id } = req.params;

    try {
      const reviews = await Review.find({ game: id });

      if (reviews) {
        res.status(200).send({ msg: "Reviews found", reviews: reviews });
      } else {
        res.status(404).send({ msg: "Reviews not found", reviews: undefined });
      }
    } catch {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
  getReviewsByUser: async (req, res) => {
    const { id } = req.params;

    try {
      const reviews = await Review.find({ user: id });

      if (reviews) {
        res.status(200).send({ msg: "Reviews found", reviews: reviews });
      } else {
        res.status(404).send({ msg: "Reviews not found", reviews: undefined });
      }
    } catch {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
  getReview: async (req, res) => {
    const { id } = req.params;

    try {
      const review = await Review.findById(id);

      if (review) {
        res.status(200).send({ msg: "Review found", review });
      } else {
        res.status(404).send({ msg: "Review not found" });
      }
    } catch {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
  deleteReview: async (req, res) => {
    const { id } = req.params;

    try {
      await Review.findByIdAndDelete(id);

      res.status(200).send({ msg: "Review deleted" });
    } catch {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
};

module.exports = reviewController;
