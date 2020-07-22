module.exports = function (sequelize, DataTypes) {
    var Leaderboard = sequelize.define("Leaderboard", {
        score: DataTypes.INTEGER
    });
    return Leaderboard;
};