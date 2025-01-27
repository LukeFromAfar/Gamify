const Tag = require("../models/TagSchema.js");

const tagController = {
  getAllTags: async (req, res) => {
    try {
      const tags = await Tag.find();

      if (tags.length > 0) {
        res.status(200).send({ msg: "Tags retrieved", tags: tags });
      } else {
        res.status(404).send({ msg: "No tags found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
  createTag: async (req, res) => {
    const { name } = req.body;

    try {
      const tag = new Tag({ name });
      const result = await tag.save();

      if (result._id) {
        res.status(201).send({ msg: "Tag created", tag: result });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
  getTag: async (req, res) => {
    const { id } = req.params;
    try {
      let tag = await Tag.findById(id);

      if (tag) {
        res.status(200).send({ msg: "Tag found", tag: tag });
      } else {
        res.status(404).send({ msg: "Tag not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
  updateTag: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const tag = await Tag.findByIdAndUpdate(id, { name: name });

      if (tag) {
        res.status(202).send({ msg: "Tag updated", tag: tag });
      } else {
        res.status(500).send({ msg: "Tag not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
  deleteTag: async (req, res) => {
    const { id } = req.params;

    try {
      const tag = await Tag.findByIdAndDelete(id);

      if (tag) {
        res.status(200).send({ msg: "Tag deleted", tag: tag });
      } else {
        res.status(500).send({ msg: "Tag not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  },
};

module.exports = tagController;
