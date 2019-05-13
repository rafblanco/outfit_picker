const db = require("../models");

module.exports = {
    //better way to find item 
    //plus show all items possibly
    findItem: function(req, res){
        db.Clothes
            .find({})
    },
    findAll: function(req, res){
        db.Clothes
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createItem: function(req, res){
        db.Clothes
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    updateItem: function(req, res){
        db.Clothes
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeItem: function(req, res){
        dbClothes
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
        }
}