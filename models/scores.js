module.exports = function(sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
      userId: DataTypes.INTEGER,
      score: DataTypes.INTEGER 
    });
    return Score;
  };