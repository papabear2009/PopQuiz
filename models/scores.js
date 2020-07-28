module.exports = function (sequelize, DataTypes) {
  var Score = sequelize.define("Score", {
    score: DataTypes.INTEGER
  });
  Score.associate = function (models) {
    Score.belongsTo(models.User, {
      through: "userScores"
    })
    Score.belongsTo(models.Quizzes, {
      through: "quizScore"
    })
  }
  return Score;
};