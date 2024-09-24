const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agenda', {
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
    type: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    omschrijving: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    verslag: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    uur: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    doorwie: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    prospect: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    preprospect: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    vanuur: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    totuur: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    voltooid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    wienog: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'agenda',
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
        name: "doorwie",
        using: "BTREE",
        fields: [
          { name: "doorwie" },
        ]
      },
      {
        name: "prospect",
        using: "BTREE",
        fields: [
          { name: "prospect" },
        ]
      },
      {
        name: "preprospect",
        using: "BTREE",
        fields: [
          { name: "preprospect" },
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
        name: "type",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
      {
        name: "klant",
        using: "BTREE",
        fields: [
          { name: "klant" },
        ]
      },
      {
        name: "wienog",
        using: "BTREE",
        fields: [
          { name: "wienog" },
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
        name: "vanuur",
        using: "BTREE",
        fields: [
          { name: "vanuur" },
        ]
      },
      {
        name: "totuur",
        using: "BTREE",
        fields: [
          { name: "totuur" },
        ]
      },
    ]
  });
};
