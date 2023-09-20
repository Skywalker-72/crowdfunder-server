module.exports = (sequelize, DataTypes) => {

    const Projects = sequelize.define("Projects", {
        projectName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        projectDesc: {
            type: DataTypes.TEXT('long'),
            allowNull: false
        },
        innovatorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'DRAFT'
        },
        targetAmount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        receivedAmount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        thumbnailUrl: {
            type: DataTypes.STRING
        },
        imageUrls: {
            type: DataTypes.TEXT('long'),
        }
    })

    return Projects;
}