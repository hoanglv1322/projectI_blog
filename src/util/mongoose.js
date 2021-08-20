module.exports ={

    muntipleMongooseToObject: function(mongoose){
        return mongoose.map(mongoose => mongoose.toObject());
    },

    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    },

    courseDetail: function(courses, slug){
        const value = courses.findIndex(course => course.slug === slug);
        const item = courses[0];
        courses[0] = courses[value];
        courses[value] = item;
        return courses.map(courses => courses.toObject());
    }
};