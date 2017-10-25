const todoRoute = app => {
    const todoController = require('../controllers/todoController');

    app.route('/api/todos')
        .get(todoController.listAll)
        .post(todoController.create)

    app.route('/api/todos/:id')
      .delete(todoController.remove)
      .put(todoController.update)
};

module.exports = todoRoute
