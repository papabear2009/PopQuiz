module.exports = function (sequelize, DataTypes) {
    var Quizzes = sequelize.define("Quizzes", {
        quizName: DataTypes.STRING
    });
    Quizzes.associate = function (models) {
        Quizzes.belongsToMany(models.Questions, {
            through: "quizQuestions"
        })
        Quizzes.belongsToMany(models.Score, {
            through: "quizScore"
        })
    }
    return Quizzes;
};