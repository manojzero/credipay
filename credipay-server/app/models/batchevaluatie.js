const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('batchevaluatie', {
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
    berekend: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    datum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    batch: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldos: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantalfact: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    reedsbetaaldvoorincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    intrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    schadebeding: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    inningskost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenaantaldos: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    geslotenaantalfact: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    geslotenhoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenreedsbetaaldvoorincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenintrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenschadebeding: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    gesloteninningskost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenaanklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenaanincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenaandeelklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenaandeelincassoinclbtw: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenbetaaldhoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenbetaaldintrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenbetaaldinningskost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenbetaaldschadebeding: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotendossierkosten: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openaantaldos: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    openaantalfact: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    openhoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openreedsbetaaldvoorincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openintrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openschadebeding: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openinningskost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openaanklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openaanincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openaandeelklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openaandeelincassoinclbtw: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openbetaaldhoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openbetaaldintrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openbetaaldinningskost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openbetaaldschadebeding: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    opendossierkosten: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    extrakost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjuraantaldos: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    geslotenjuraantalfact: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    geslotenjurhoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjurreedsbetaaldvoorincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjurintrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjurschadebeding: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjurinningskost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjuraanklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjuraanincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjuraandeelklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjuraandeelincassoinclbtw: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjurbetaaldhoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjurbetaaldintrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjurbetaaldinningskost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjurbetaaldschadebeding: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjurdossierkosten: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjuraantaldos: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    openjuraantalfact: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    openjurhoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjurreedsbetaaldvoorincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjurintrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjurschadebeding: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjurinningskost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjuraanklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjuraanincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjuraandeelklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjuraandeelincassoinclbtw: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjurbetaaldhoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjurbetaaldintrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjurbetaaldinningskost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjurbetaaldschadebeding: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjurdossierkosten: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenbetaaldextrakost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openbetaaldextrakost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjurbetaaldextrakost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjurbetaaldextrakost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    dossierkosten: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aantalafbetaalplan: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantalschuldbemiddeling: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    openjuraantalschuldbemiddeling: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    geslotenjuraantalschuldbemiddeling: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    openaantalschuldbemiddeling: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    geslotenaantalschuldbemiddeling: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    geslotenaantalafbetaalplan: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    openaantalafbetaalplan: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    openjuraantalafbetaalplan: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    geslotenjuraantalafbetaalplan: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    geslotenextrakost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openjurextrakost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotenjurextrakost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    openextrakost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aandeelklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aandeelincassoinclbtw: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aanklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aanincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    betaaldhoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    betaaldintrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    betaaldschadebeding: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    betaaldinningskost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    betaaldextrakost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    tableName: 'batchevaluatie',
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
