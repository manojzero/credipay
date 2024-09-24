const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dossiers_zot', {
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
      allowNull: false
    },
    debiteur: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    closed: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    trein: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    treintechnisch: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    huidigeactie: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    huidigeactiedatum: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    volgendeactie: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    volgendeactiedatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    intrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    schadebeding: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    inningskost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    openstaandbedrag: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    totaalbedrag: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    closedate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00"
    },
    sluitreden: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    afbetaalstap: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    afbetaalstappen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    afbetaalbedrag: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    afbetaalbedraglaatstemaand: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    afbetaalstartdatum: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    refklant: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: " "
    },
    klantreferentie: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    juridisch: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    schadebedingminimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    schadebedingpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    intrestminimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    intrestpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    interneopmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    advocaatingelicht: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    totaalhoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    gekoppeldedossiers: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reedsbetaaldvoorincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    aantalacties: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    aantallogboek: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    klantcategorie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    aanmaanminnelijk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    kostenklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    aandeelcs: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    aandeelklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    aandeeladv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    metadv: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    onkostencs: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    onkostencsmettijd: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    reedsbetaaldvoorincassorefs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    facturenopsomming: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    waarschuwenbijbetaling: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    waarschuwingbijbetaling: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    populatieaanvraag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    tijd: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    closeverwerkt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    betaaldkl: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    betaaldcs: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    grotedossierdatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    debiteuraanvuldatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    briefbijlage: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    openweek: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    closeweek: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dosrating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dostype: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aantalbrf: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aantaltel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aantalsms: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aantalfax: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aantalemail: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aantalfacturen: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doorlooptijd: {
      type: DataTypes.BIGINT,
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
    totaantalacties: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    briefacties: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    telacties: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    smsacties: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    emailacties: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    faxacties: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fiscaalattest: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    batch: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    facturatiedossier: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    collectieve: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    metdw: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    aandeeldw: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bezig: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    onkostencsold: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    onkostencsmettijdold: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    afbetaalherinnerdatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    smsverbodentot: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    collectieveadres: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    collectievereferentie: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    provincie: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gezipt: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    groottevoor: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    groottena: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    }
  }, {
    tableName: 'dossiers_zot',
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
        name: "debiteur",
        using: "BTREE",
        fields: [
          { name: "debiteur" },
        ]
      },
      {
        name: "closed",
        using: "BTREE",
        fields: [
          { name: "closed" },
        ]
      },
      {
        name: "treintechnisch",
        using: "BTREE",
        fields: [
          { name: "treintechnisch" },
        ]
      },
      {
        name: "trein",
        using: "BTREE",
        fields: [
          { name: "trein" },
        ]
      },
      {
        name: "huidigeactie",
        using: "BTREE",
        fields: [
          { name: "huidigeactie" },
        ]
      },
      {
        name: "huidigeactiedatum",
        using: "BTREE",
        fields: [
          { name: "huidigeactiedatum" },
        ]
      },
      {
        name: "volgendeactie",
        using: "BTREE",
        fields: [
          { name: "volgendeactie" },
        ]
      },
      {
        name: "volgendeactiedatum",
        using: "BTREE",
        fields: [
          { name: "volgendeactiedatum" },
        ]
      },
      {
        name: "closedate",
        using: "BTREE",
        fields: [
          { name: "closedate" },
        ]
      },
      {
        name: "sluitreden",
        using: "BTREE",
        fields: [
          { name: "sluitreden" },
        ]
      },
      {
        name: "refklant",
        using: "BTREE",
        fields: [
          { name: "refklant" },
        ]
      },
      {
        name: "waarschuwingbijbetaling",
        using: "BTREE",
        fields: [
          { name: "waarschuwingbijbetaling" },
        ]
      },
      {
        name: "closeverwerkt",
        using: "BTREE",
        fields: [
          { name: "closeverwerkt" },
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
        name: "openstaandbedrag",
        using: "BTREE",
        fields: [
          { name: "openstaandbedrag" },
        ]
      },
      {
        name: "totaalbedrag",
        using: "BTREE",
        fields: [
          { name: "totaalbedrag" },
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
        name: "inserted",
        using: "BTREE",
        fields: [
          { name: "inserted" },
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
        name: "provincie",
        using: "BTREE",
        fields: [
          { name: "provincie" },
        ]
      },
      {
        name: "juridisch",
        using: "BTREE",
        fields: [
          { name: "juridisch" },
        ]
      },
      {
        name: "klantcategorie",
        using: "BTREE",
        fields: [
          { name: "klantcategorie" },
        ]
      },
      {
        name: "populatieaanvraag",
        using: "BTREE",
        fields: [
          { name: "populatieaanvraag" },
        ]
      },
      {
        name: "dostype",
        using: "BTREE",
        fields: [
          { name: "dostype" },
        ]
      },
      {
        name: "dosrating",
        using: "BTREE",
        fields: [
          { name: "dosrating" },
        ]
      },
      {
        name: "gezipt",
        using: "BTREE",
        fields: [
          { name: "gezipt" },
        ]
      },
      {
        name: "bezig",
        using: "BTREE",
        fields: [
          { name: "bezig" },
        ]
      },
      {
        name: "debiteur_id",
        using: "BTREE",
        fields: [
          { name: "debiteur" },
          { name: "id" },
        ]
      },
      {
        name: "debiteur_hoofdsom_openstaandbedrag_id",
        using: "BTREE",
        fields: [
          { name: "debiteur" },
          { name: "hoofdsom" },
          { name: "openstaandbedrag" },
          { name: "id" },
        ]
      },
    ]
  });
};
