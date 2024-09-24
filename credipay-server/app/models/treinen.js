const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('treinen', {
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
    omschrijving: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    volgorde: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    klanten: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    alleklanten: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    voorwaarde1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    voorwaarde2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    voorwaarde3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    scom1: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    scom2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    scom3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    icom1: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    icom2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    icom3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    hcom1: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    hcom2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    hcom3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    dossierkost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    trein: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    ccom1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    ccom2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    ccom3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    volgorde2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    vervolgtrein: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    selecteerbaar: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    toneninlijst: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    volg: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aanmaning: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    doorstorths: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    doorstorti: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    doorstorts: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    doorstortik: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    individueeldoorstorten: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    commissieinclbtw: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    dossierkost2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    voorprospect: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    gemidkostperdossier: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aantaldossiers: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ktitelnl: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    ktitelen: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    ktitelfr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    ktitelde: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    komschrijvingnl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    komschrijvingen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    komschrijvingfr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    komschrijvingde: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'treinen',
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
