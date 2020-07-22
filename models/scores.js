module.exports = function(sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
      score: DataTypes.INTEGER 
    });
    return Score;
  };