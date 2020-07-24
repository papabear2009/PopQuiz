module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });
  User.associate = function (models) {
    User.belongsToMany(models.Score, {
      through: "userScores"
    });
  }
  return User;
};