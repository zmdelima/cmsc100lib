'use strict';

const grade = require(__dirname + '/../controllers/grade');

module.exports = function(router) {
//routes go here
    router.route('/student/grades')
            .get(grade.findOneStudent);
    router.route('/grades')
            .get(grade.getAll)
            .post(grade.create);
    router.route('/grades/:id')
            .get(grade.findOne)
            .post(grade.update)
            .delete(grade.remove);
            
} 
