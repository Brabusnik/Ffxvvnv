"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init({
        username: DataTypes.STRING,
        mentor_id: DataTypes.BIGINT,
        status: DataTypes.TINYINT,
        banned: DataTypes.BOOLEAN,
        hideNick: DataTypes.BOOLEAN,
        percent: DataTypes.DECIMAL(36, 2),
        percentType: DataTypes.TINYINT,
    }, {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        sequelize,
        modelName: "User",
    });
    return User;
};