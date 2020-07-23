module.exports = function (sequelize, DataTypes) {
    var Quizzes = sequelize.define("Quizzes", {
        quizId: DataTypes.INTEGER,
        Q: DataTypes.STRING,
        Correct: DataTypes.STRING,
        A2: DataTypes.STRING,
        A3: DataTypes.STRING,
        A4: DataTypes.STRING
    });
    return Quizzes;
};