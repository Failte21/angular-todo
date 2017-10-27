import  * as countController from '../controllers/countController'

module.exports = app => {
  app.route('/api/counts')
    .get(countController.getAll)
    .post(countController.create)

  app.route('/api/counts/:id')
    .get(countController.getOne)
    .put(countController.addExpense)
    .delete(countController.remove)
}
