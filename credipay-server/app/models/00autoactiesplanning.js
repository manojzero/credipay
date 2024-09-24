const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('00autoactiesplanning', {
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
    actie: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bestand: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    voltooid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    opmerking: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    zwaar: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    busy: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    aantalpogingen: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: '00autoactiesplanning',
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
        name: "actie",
        using: "BTREE",
        fields: [
          { name: "actie" },
        ]
      },
      {
        name: "voltooid",
        using: "BTREE",
        fields: [
          { name: "voltooid" },
        ]
      },
      {
        name: "zwaar",
        using: "BTREE",
        fields: [
          { name: "zwaar" },
        ]
      },
      {
        name: "busy",
        using: "BTREE",
        fields: [
          { name: "busy" },
        ]
      },
      {
        name: "aantalpogingen",
        using: "BTREE",
        fields: [
          { name: "aantalpogingen" },
        ]
      },
    ]
  });
};
