module.exports = function (sequelize, DataTypes) {
    var Questions = sequelize.define("Questions", {
        category: DataTypes.STRING,
        Q: DataTypes.STRING,
        Correct: DataTypes.STRING,
        A2: DataTypes.STRING,
        A3: DataTypes.STRING,
        A4: DataTypes.STRING,
    });
    return Questions;
};