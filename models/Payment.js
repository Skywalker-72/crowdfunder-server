module.exports = (sequelize, DataTypes) => {

    const Payments = sequelize.define("Payments", {
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userPhoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        projectId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'DONE'
        },
        amount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        stripeTxnId: {
            type: DataTypes.STRING
        },
    })

    return Payments;
}