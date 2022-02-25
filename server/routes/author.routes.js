const AuthorController = require('../controller/author.contorllers');

module.exports = (app) => {
    app.get('/api/author',AuthorController.findAllAuthors)
    app.post('/api/author',AuthorController.createAuthor)
    app.get('/api/author/:id',AuthorController.findOne)
    app.delete('/api/author/:id',AuthorController.deleteOne)
    app.put('/api/author/:id',AuthorController.updateOne)



}
