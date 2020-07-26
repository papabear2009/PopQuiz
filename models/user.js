const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });
  User.beforeCreate(function(user){
    user.password = bcrypt.hashSync(user.password,bcrypt.genSaltSync(10),null);
})

  User.associate = function (models) {
    User.belongsToMany(models.Score, {
      through: "userScores"
    });
  }
  return User;
};