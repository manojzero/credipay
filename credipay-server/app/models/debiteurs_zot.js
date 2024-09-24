const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('debiteurs_zot', {
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
    btw2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 999
    },
    naam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    voornaam: {
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
    klantid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    telefoon: {
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
    rekeningnummer: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    gestructureerdemededeling: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    taal: {
      type: DataTypes.STRING(5),
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
    bic: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    afbetaalmaanden: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    failliet: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    dossiers: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bedrijf: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    gsm: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    gekoppeldedebiteurs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    land: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    aantalopvraginggegevens: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    categorie: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wijzigingen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    klantdebiteurid: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    sepa: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    sepadatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    onvermogend: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    locatie: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    mogelijkedubbel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    totdossiers: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaltelopzoekingen: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    domdebt: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    dosdebt: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    factdebt: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    jurdebt: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    geboortedatum: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    dossierkoppelingnagekeken: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    document: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    provincie: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    overleden: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    onvindbaar: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    waarschuwingbijnieuwdossier: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klantdebiteurid2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    gevraagdeogm: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'debiteurs_zot',
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
        name: "firmanaam",
        using: "BTREE",
        fields: [
          { name: "firmanaam" },
        ]
      },
      {
        name: "naam",
        using: "BTREE",
        fields: [
          { name: "naam" },
        ]
      },
      {
        name: "voornaam",
        using: "BTREE",
        fields: [
          { name: "voornaam" },
        ]
      },
      {
        name: "adres",
        using: "BTREE",
        fields: [
          { name: "adres" },
        ]
      },
      {
        name: "postcode",
        using: "BTREE",
        fields: [
          { name: "postcode" },
        ]
      },
      {
        name: "gemeente",
        using: "BTREE",
        fields: [
          { name: "gemeente" },
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
        name: "telefoon",
        using: "BTREE",
        fields: [
          { name: "telefoon" },
        ]
      },
      {
        name: "fax",
        using: "BTREE",
        fields: [
          { name: "fax" },
        ]
      },
      {
        name: "email",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "taal",
        using: "BTREE",
        fields: [
          { name: "taal" },
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
        name: "klantdebiteurid",
        using: "BTREE",
        fields: [
          { name: "klantdebiteurid" },
        ]
      },
      {
        name: "geboortedatum",
        using: "BTREE",
        fields: [
          { name: "geboortedatum" },
        ]
      },
      {
        name: "sepa",
        using: "BTREE",
        fields: [
          { name: "sepa" },
        ]
      },
      {
        name: "waarschuwingbijnieuwdossier",
        using: "BTREE",
        fields: [
          { name: "waarschuwingbijnieuwdossier" },
        ]
      },
      {
        name: "onvindbaar",
        using: "BTREE",
        fields: [
          { name: "onvindbaar" },
        ]
      },
      {
        name: "overleden",
        using: "BTREE",
        fields: [
          { name: "overleden" },
        ]
      },
      {
        name: "provincie",
        using: "BTREE",
        fields: [
          { name: "provincie" },
        ]
      },
      {
        name: "failliet_bedrijf",
        using: "BTREE",
        fields: [
          { name: "failliet" },
          { name: "bedrijf" },
        ]
      },
      {
        name: "categorie",
        using: "BTREE",
        fields: [
          { name: "categorie" },
        ]
      },
      {
        name: "onvermogend",
        using: "BTREE",
        fields: [
          { name: "onvermogend" },
        ]
      },
      {
        name: "mogelijkedubbel",
        using: "BTREE",
        fields: [
          { name: "mogelijkedubbel" },
        ]
      },
      {
        name: "domdebt",
        using: "BTREE",
        fields: [
          { name: "domdebt" },
        ]
      },
      {
        name: "factdebt",
        using: "BTREE",
        fields: [
          { name: "factdebt" },
        ]
      },
      {
        name: "dosdebt",
        using: "BTREE",
        fields: [
          { name: "dosdebt" },
        ]
      },
      {
        name: "jurdebt",
        using: "BTREE",
        fields: [
          { name: "jurdebt" },
        ]
      },
    ]
  });
};
