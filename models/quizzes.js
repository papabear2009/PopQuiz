module.exports = function (sequelize, DataTypes) {
    var Quizzes = sequelize.define("Quizzes", {
        OneQ: DataTypes.STRING,
        OneCorrect: DataTypes.STRING,
        OneA2: DataTypes.STRING,
        OneA3: DataTypes.STRING,
        OneA4: DataTypes.STRING,

        TwoQ: DataTypes.STRING,
        TwoCorrect: DataTypes.STRING,
        TwoA2: DataTypes.STRING,
        TwoA3: DataTypes.STRING,
        TwoA4: DataTypes.STRING,

        ThreeQ: DataTypes.STRING,
        ThreeCorrect: DataTypes.STRING,
        ThreeA2: DataTypes.STRING,
        ThreeA3: DataTypes.STRING,
        ThreeA4: DataTypes.STRING,

        FourQ: DataTypes.STRING,
        FourCorrect: DataTypes.STRING,
        FourA2: DataTypes.STRING,
        FourA3: DataTypes.STRING,
        FourA4: DataTypes.STRING,

        FiveQ: DataTypes.STRING,
        FiveCorrect: DataTypes.STRING,
        FiveA2: DataTypes.STRING,
        FiveA3: DataTypes.STRING,
        FiveA4: DataTypes.STRING,

        SixQ: DataTypes.STRING,
        SixCorrect: DataTypes.STRING,
        SixA2: DataTypes.STRING,
        SixA3: DataTypes.STRING,
        SixA4: DataTypes.STRING,

        SevenQ: DataTypes.STRING,
        SevenCorrect: DataTypes.STRING,
        SevenA2: DataTypes.STRING,
        SevenA3: DataTypes.STRING,
        SevenA4: DataTypes.STRING,

        EightQ: DataTypes.STRING,
        EightCorrect: DataTypes.STRING,
        EightA2: DataTypes.STRING,
        EightA3: DataTypes.STRING,
        EightA4: DataTypes.STRING,

        NineQ: DataTypes.STRING,
        NineCorrect: DataTypes.STRING,
        NineA2: DataTypes.STRING,
        NineA3: DataTypes.STRING,
        NineA4: DataTypes.STRING,

        TenQ: DataTypes.STRING,
        TenCorrect: DataTypes.STRING,
        TenA2: DataTypes.STRING,
        TenA3: DataTypes.STRING,
        TenA4: DataTypes.STRING
    });
    return Quizzes;
};