module.exports = (sequelize, DataTypes) => {

    const Innovator = sequelize.define("Innovator", {
        innovatorEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        innovatorName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        innovatorPhoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type: DataTypes.STRING,
            allowNull: false
        },
        intro: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    return Innovator;
}