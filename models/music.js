module.exports = function (sequelize, DataTypes) {
    var Music = sequelize.define("Music", {
        question: DataTypes.STRING,
        answerOne: DataTypes.STRING,
        answerTwo: DataTypes.STRING,
        answerThree: DataTypes.STRING,
        answerFour: DataTypes.STRING,
        answerCorrect: DataTypes.STRING,
    });
    return Music;
};