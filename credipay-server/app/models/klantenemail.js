const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('klantenemail', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    komendvan: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    inserted: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modifiedby: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    mailtitel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    inhoud: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    prepros: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pros: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    mailtitelnl: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    mailtitelen: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    mailtitelfr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    mailtitelde: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    inhoudnl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    inhouden: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    inhoudfr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    inhoudde: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'klantenemail',
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
    ]
  });
};
