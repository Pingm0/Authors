const Author = require('../models/author.model')

module.exports = {
    findAllAuthors: ((req,res) => {
        Author.find()
            .then((allAuthors) => {
                console.log(allAuthors)
                res.json(allAuthors)
            })
            .catch((err) => {
                console.log('Something went wrong with retreving All Authors')
                res.json({message:"something went Wrong",error:err})
            })
    }),
    createAuthor: ((req,res) => {
        Author.create(req.body)
            .then((newAuthor) => {
                console.log(newAuthor)
                res.json(newAuthor)
            })
            .catch((err) => {
                console.log("Something went wrong when creating a Author" ,err)
                res.status(400).json(err)
            })
    }),
    findOne: ((req,res) => {
        Author.findOne({_id:req.params.id})
            .then((oneAuthor) => {
                console.log(oneAuthor)
                res.json(oneAuthor)
            })
            .catch((err) => {
                console.log("something went wrong retreving One Author")
                res.json(err)
            })
    }),
    deleteOne: ((req,res) => {
        Author.deleteOne({_id:req.params.id})
            .then((oneAuthor) => {
                console.log(oneAuthor)
                res.json(oneAuthor)
            })
            .catch((err) => {
                console.log("something went wrong deleting One Author")
                res.json(err)
            })
    }),
    updateOne: ((req,res) => {
        Author.findOneAndUpdate({_id: req.params.id},req.body,{new:true,runValidators:true})
            .then((oneUpdated) => {
                console.log(oneUpdated)
                res.json(oneUpdated)
            })
            .catch((err) =>{
                res.status(400).json(err)
            })
    }),

}