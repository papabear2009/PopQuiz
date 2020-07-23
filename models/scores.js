module.exports = function (sequelize, DataTypes) {
  var Score = sequelize.define("Score", {
    score: DataTypes.INTEGER
  });
  Score.associate = function (models) {
    Score.belongsTo(models.User, {
      through: "userScores"
    })
  }
  return Score;
};