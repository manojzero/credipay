const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prospecten', {
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
    firmanaam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    btw: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    adres: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    gemeente: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    website: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    taalkeuze: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sector: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    naam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    voornaam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    tel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    fax: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    opmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gecheckt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mogelijkedubbels: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    via: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    actief: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    companeo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    bobex: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    randomcode: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    gsm: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    intresten: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    schadebeding: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    inningskosten: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    opmerkingfinancieel: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    i: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    s: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    smin: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    ik: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    ikmin: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    voorwaardenopmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    aantalfactopen: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factopenbedrag: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantalmaandopen: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    betaaltermijn: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    verkoopsvoorwaardenaanwezig: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    slagingspercentage: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte1: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte3: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte4: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte5: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage1: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage3: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage4: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage5: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers1: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers3: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers4: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers5: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte6: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte7: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte8: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage6: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage7: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage8: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers6: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers7: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers8: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers62: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers72: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers82: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage62: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage72: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage82: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte62: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte72: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte82: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte9: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage9: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers9: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte92: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage92: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers92: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers93: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag1: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag3: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag4: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag5: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag6: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag7: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag8: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag9: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag10: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag62: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag72: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag82: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag92: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag102: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag93: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurbedrag103: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte10: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage10: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers10: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinofferte102: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slagingspercentage102: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers102: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldossiers103: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    inofferte1: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    inofferte2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    inofferte3: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    inofferte4: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    inofferte5: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    inofferte6: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    inofferte7: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    inofferte8: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    inofferte9: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    inofferte10: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    offerteuitleg1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offerteuitleg2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offerteuitleg3: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offerteuitleg4: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offerteuitleg5: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offerteuitleg6: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offerteuitleg7: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offerteuitleg8: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offerteuitleg9: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offerteuitleg10: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    introsimulatie: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    onsvoorstel: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    b2b: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'prospecten',
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
