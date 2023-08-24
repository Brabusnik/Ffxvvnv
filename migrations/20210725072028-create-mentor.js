"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Mentors",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        id_mentor: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        username_mentor: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        description: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP()"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal(
            "CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()"
          ),
        },
      },
      {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Mentors");
  },
};
