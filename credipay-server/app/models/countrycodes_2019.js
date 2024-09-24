const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countrycodes_2019', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nl: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fr: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    de: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    en: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    isoCode: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "2-part ISO code"
    }
  }, {
    tableName: 'countrycodes_2019',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "Search - Left join",
        using: "BTREE",
        fields: [
          { name: "nl" },
          { name: "id" },
          { name: "fr" },
          { name: "de" },
          { name: "en" },
        ]
      },
    ]
  });
};
