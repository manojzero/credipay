const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zot_facturen', {
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
    eigennummer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    referentie: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    datum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    betaaltermijn: {
      type: DataTypes.BIGINT,
      allowNull: false
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
    totaal: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    betaaldincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    rest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    dossier: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    debiteur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    betaaldklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    reedsbetaaldvoorincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    artikelnummerschadebeding: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    artikelnummerintrest: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    intrestpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    schadebedingpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    intrestminimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    schadebedingminimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    reedsbetaald: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    hoofdsom2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    intrest2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    schadebeding2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    inningskost2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    klantcategorie: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    ik: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    s: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    inningskostminimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    inningskostpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    doorstortmededeling: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    boekjaar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    factuurbedragexcl: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    factuurbedragincl: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bestand: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    paymentlistid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    jurdos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fiscaalattestid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    batch: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    origintrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    transformedreferentie: {
      type: DataTypes.STRING(220),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    tableName: 'zot_facturen',
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
        name: "modified",
        using: "BTREE",
        fields: [
          { name: "modified" },
        ]
      },
      {
        name: "eigennummer",
        using: "BTREE",
        fields: [
          { name: "eigennummer" },
        ]
      },
      {
        name: "referentie",
        using: "BTREE",
        fields: [
          { name: "referentie" },
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
        name: "hoofdsom",
        using: "BTREE",
        fields: [
          { name: "hoofdsom" },
        ]
      },
      {
        name: "intrest",
        using: "BTREE",
        fields: [
          { name: "intrest" },
        ]
      },
      {
        name: "schadebeding",
        using: "BTREE",
        fields: [
          { name: "schadebeding" },
        ]
      },
      {
        name: "inningskost",
        using: "BTREE",
        fields: [
          { name: "inningskost" },
        ]
      },
      {
        name: "totaal",
        using: "BTREE",
        fields: [
          { name: "totaal" },
        ]
      },
      {
        name: "betaaldincasso",
        using: "BTREE",
        fields: [
          { name: "betaaldincasso" },
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
        name: "dossier",
        using: "BTREE",
        fields: [
          { name: "dossier" },
        ]
      },
      {
        name: "debiteur",
        using: "BTREE",
        fields: [
          { name: "debiteur" },
        ]
      },
      {
        name: "betaaldklant",
        using: "BTREE",
        fields: [
          { name: "betaaldklant" },
        ]
      },
      {
        name: "reedsbetaaldvoorincasso",
        using: "BTREE",
        fields: [
          { name: "reedsbetaaldvoorincasso" },
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
        name: "paymentlistid",
        using: "BTREE",
        fields: [
          { name: "paymentlistid" },
        ]
      },
      {
        name: "batch",
        using: "BTREE",
        fields: [
          { name: "batch" },
        ]
      },
      {
        name: "fiscaalattestid",
        using: "BTREE",
        fields: [
          { name: "fiscaalattestid" },
        ]
      },
      {
        name: "doorstortmededeling",
        using: "BTREE",
        fields: [
          { name: "doorstortmededeling" },
        ]
      },
    ]
  });
};
