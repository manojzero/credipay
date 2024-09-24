const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idfacturen', {
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
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    datum: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    omschrijving: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bedrag: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    btw: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bedragincl: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bestand: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    verkoopsvoorwaardentabblad: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    paymentlist: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    betaald: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    rest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    afrekening: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    klantcategorie: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    paymentlistdom: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    domiciliering: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tonen: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    bcategorie: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    factuurafbeelding: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    factuurpagina1: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'idfacturen',
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
        name: "klant",
        using: "BTREE",
        fields: [
          { name: "klant" },
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
        name: "omschrijving",
        using: "BTREE",
        fields: [
          { name: "omschrijving" },
        ]
      },
      {
        name: "bedrag",
        using: "BTREE",
        fields: [
          { name: "bedrag" },
        ]
      },
      {
        name: "btw",
        using: "BTREE",
        fields: [
          { name: "btw" },
        ]
      },
      {
        name: "betaald",
        using: "BTREE",
        fields: [
          { name: "betaald" },
        ]
      },
      {
        name: "rest",
        using: "BTREE",
        fields: [
          { name: "rest" },
        ]
      },
      {
        name: "klantcategorie",
        using: "BTREE",
        fields: [
          { name: "klantcategorie" },
        ]
      },
    ]
  });
};
