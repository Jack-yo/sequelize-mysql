const Student = require('../../models/Student');
const Course = require('../../models/Course');
const Class = require('../../models/Class');
const Grade = require('../../models/Grade');

Student.sync({
    force:true
});

Course.sync({
    force:true
});

Class.sync({
    force:true
});

Grade.sync({
    force:true
});