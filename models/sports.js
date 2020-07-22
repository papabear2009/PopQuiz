module.exports = function (sequelize, DataTypes) {
    var Sports = sequelize.define("Sports", {
        question: DataTypes.STRING,
        answerOne: DataTypes.STRING,
        answerTwo: DataTypes.STRING,
        answerThree: DataTypes.STRING,
        answerFour: DataTypes.STRING,
        answerCorrect: DataTypes.STRING,
    });
    return Sports;
};