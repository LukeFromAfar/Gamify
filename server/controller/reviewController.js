const Review = require("../models/ReviewSchema");

const reviewController = {
    createReview: (async (req, res) => {
        const { gameId } = req.params;
        const { comment, recommended, stars } = req.body;
        const email = req.user.email;
        let userId = req.user.id;
        console.log(req.user);

        console.log(req.body);
        // const user = await User.findOne({ email });

        const review = await Review.create({
            user: userId, 
            game: gameId, 
            comment, 
            recommended, 
            stars
        });
        // review.save();

        if (review) {
            res.status(201).send({ msg: "Review created", review });
        } else {
            res.status(500).send({ msg: "Error creating review" });
        }

    }),
    getReviewsByGame: (async (req, res) => {
        const { id } = req.params;
    }),
    getReviewsByUser: (async (req, res) => {
        const { id } = req.params;
    }),
    getReview: (async (req, res) => {
        const { id } = req.params;
    }),
    deleteReview: (async (req, res) => {
        const { id } = req.params;
    })
}

module.exports = reviewController;