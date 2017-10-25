const todoRoute = app => {
    const todoController = require('../controllers/todoController');

    app.route('/api/todos')
        .get(todoController.listAll)
        .post(todoController.create)
};

module.exports = todoRoute
