const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('betalingen2', {
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
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    modifiedby: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: " "
    },
    dossier: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    factuur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    hoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    intrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    schadebeding: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    inningskost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    aanklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    aanincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    bedrag: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    datum: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00"
    },
    referentiebank: {
      type: DataTypes.STRING(220),
      allowNull: true,
      defaultValue: " "
    },
    opmerking: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: " "
    },
    doorstortid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    paymentlistid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    factuurid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    aandeelklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    aandeelincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    aandeelincassoinclbtw: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    doorstortbedrag: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    klantid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    totaalvanstorting: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    klantcategorie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dosclose: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    metadv: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    debiteurnaam: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    individueel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    doorstortmededeling: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    debiteurid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    betalinginfactuuropgenomen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    metdw: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    opmerkingintern: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    internok: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    dagennaopstart: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    natemplate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    dossierdatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'betalingen2',
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
        name: "id",
        using: "BTREE",
        fields: [
          { name: "id" },
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
        name: "factuur",
        using: "BTREE",
        fields: [
          { name: "factuur" },
        ]
      },
      {
        name: "klantid",
        using: "BTREE",
        fields: [
          { name: "klantid" },
        ]
      },
      {
        name: "debiteurid",
        using: "BTREE",
        fields: [
          { name: "debiteurid" },
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
        name: "referentiebank",
        using: "BTREE",
        fields: [
          { name: "referentiebank" },
        ]
      },
      {
        name: "opmerking",
        using: "BTREE",
        fields: [
          { name: "opmerking" },
        ]
      },
      {
        name: "dosclose",
        using: "BTREE",
        fields: [
          { name: "dosclose" },
        ]
      },
      {
        name: "opmerkingintern",
        using: "BTREE",
        fields: [
          { name: "opmerkingintern" },
        ]
      },
      {
        name: "debiteurnaam",
        using: "BTREE",
        fields: [
          { name: "debiteurnaam" },
        ]
      },
      {
        name: "dossierdatum",
        using: "BTREE",
        fields: [
          { name: "dossierdatum" },
        ]
      },
      {
        name: "dagennaopstart",
        using: "BTREE",
        fields: [
          { name: "dagennaopstart" },
        ]
      },
      {
        name: "natemplate",
        using: "BTREE",
        fields: [
          { name: "natemplate" },
        ]
      },
    ]
  });
};
