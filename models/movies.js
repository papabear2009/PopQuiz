module.exports = function (sequelize, DataTypes) {
    var Movies = sequelize.define("Movies", {
        question: DataTypes.STRING,
        answerOne: DataTypes.STRING,
        answerTwo: DataTypes.STRING,
        answerThree: DataTypes.STRING,
        answerFour: DataTypes.STRING,
        answerCorrect: DataTypes.STRING,
    });
    return Movies;
};