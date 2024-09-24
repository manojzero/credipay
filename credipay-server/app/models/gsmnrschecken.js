const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gsmnrschecken', {
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
    datum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    gsm: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    dossier: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    info: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    ported: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ported_from: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    voltooid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    mcc: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    mnc: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'gsmnrschecken',
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
        name: "gsm",
        using: "BTREE",
        fields: [
          { name: "gsm" },
        ]
      },
      {
        name: "dossier",
        using: "BTREE",
        fields: [
          { name: "dossier" },
        ]
      },
      {
        name: "datum",
        using: "BTREE",
        fields: [
          { name: "datum" },
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
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
