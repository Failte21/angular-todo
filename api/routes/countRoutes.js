import  * as countController from '../controllers/countController'

module.exports = app => {
  app.route('/counts')
    .get(countController.getAll)
    .post(countController.create)

  app.route('/counts/:id')
    .put(countController.addExpense)
    .delete(countController.remove)
}
