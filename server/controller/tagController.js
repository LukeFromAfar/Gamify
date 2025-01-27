const Tag = require("../models/TagSchema.js");

const tagController = {
    getAllTags: (async (req, res) => {
        const tags = await Tag.find();

        if (tags.length > 0) {
            res.status(200).send({ msg: "Tags retrieved", tags: tags });
        } else {
            res.status(404).send({ msg: "No tags found" });
        }
    }),
    createTag: (async (req, res) => {
        const { name } = req.body;

        const tag =  new Tag({name})
        const result = await tag.save();

        if(result._id) {
            res.status(201).send({ msg: "Tag created", tag: result });
        }
    }),
    getTag: (async (req, res) => {
        const { id } = req.params;
        let tag = await Tag.findById(id)


        if (tag) {
            res.status(200).send({ msg: "Tag found", tag: tag });
        } else {
            res.status(404).send({ msg: "Tag not found" });
        }
    }),
    updateTag: (async (req, res) => {
        const { id } = req.params;
        const { name } = req.body
        
        const tag = await Tag.findByIdAndUpdate(id, {name: name})

        if(tag) {
            res.status(202).send({ msg: "Tag updated", tag: tag });
        } else {
            res.status(500).send({ msg: "Tag not found" });
        }
    }),
    deleteTag: (async (req, res) => {
        const { id } = req.params;

        const tag = await Tag.findByIdAndDelete(id)

        if(tag) {
            res.status(200).send({ msg: "Tag deleted", tag: tag });
        } else {
            res.status(500).send({ msg: "Tag not found" });
        }
    })
}

module.exports = tagController;