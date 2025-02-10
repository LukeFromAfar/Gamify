const Game = require("../models/GamesSchema.js");

const gameController = {
  getAllGames: async (req, res) => {
    try {
      const games = await Game.find();

      if (games.length > 0) {
        res.status(200).send({ msg: "Games retrieved", games: games });
      } else {
        res.status(404).send({ msg: "No games found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
  createGame: async (req, res) => {
    const {
      title,
      price,
      discount,
      publisher,
      developer,
      releaseDate,
      status,
      description,
      shortDescription,
    } = req.body;

    const game = new Game({
      title,
      price,
      discount,
      publisher,
      developer,
      releaseDate,
      status,
      description,
      shortDescription,
    });

    try {
      let result = await game.save();
      console.log(result);

      if (result._id) {
        res.status(201).send({ msg: "Game created", game: game });
      } else {
        res.status(500).send({ msg: "Game not created" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }

    let result = await game.save();
    console.log(result);

    if (result._id) {
      res.status(201).send({ msg: "Game created", game: game });
    } else {
      res.status(500).send({ msg: "Game not created" });
    }
  },
  getGame: async (req, res) => {
    const { id } = req.params;

    try {
      const game = await Game.findById(id);
      console.log(game);

      res.status(200).send({ msg: "Game retrieved", game: game });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
  editGame: async (req, res) => {
    const { id } = req.params;
    const updateContent = req.body;

    try {
      const game = await Game.findByIdAndUpdate(id, updateContent);
      console.log(game, "UPDATING...");
      res.status(200).send({ msg: "Game updated" });
    } catch (error) {
      console.log(error);
    }
  },
  deleteGame: async (req, res) => {
    const { id } = req.params;

    try {
      const game = await Game.findByIdAndDelete(id);

      res.status(200).send({ msg: "Game deleted", game: game });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
};

module.exports = gameController;
