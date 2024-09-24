const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('klanten', {
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
    lastlogin: {
      type: DataTypes.DATE,
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
    land: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "België"
    },
    website: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    taalkeuze: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rekeningnummer: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    aanspreking: {
      type: DataTypes.INTEGER,
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
    betaaltermijn: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    artikelnummerschadebeding: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    artikelnummerintrest: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    verkoopsvoorwaarden: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    intrestpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    schadebedingpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    schadebedingminimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    intrestminimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    maxmaanden: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    standaardtrein: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aanspreking2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    naam2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    voornaam2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    telefoon2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    fax2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    email2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    verkoopsvoorwaardenaanwezig: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sector: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    gecheckt: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    mogelijkedubbels: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gebruikersnaam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    wachtwoord: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    lastlogin2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bic: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    actief: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    aantalncnp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kredietlimiet: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contract: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    aboopmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    via: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    herinnering: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    remindernieuwedossiers: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    weeklyemail: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    reminder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    reminderdatum: {
      type: DataTypes.DATE,
      allowNull: false
    },
    hoofdindeling: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    populatie: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    populatieminhoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    juridischvanaf: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantalbtwopvolging: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 30
    },
    btwpercentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 21
    },
    categorieapart: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    btwherinnering: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    btwherinneringdatum: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    inningskostpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    inningskostminimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    artikelnummerinningskost: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    inningskostdossierminimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    inningskostdossierpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    schadebedingdossierminimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    schadebedingdossierpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    kleinedossiers: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    mix3: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    companeo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    kostprijsactueel: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    kostprijspos: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    kostprijsneg: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    standaardtreindom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    vkvw: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klantgegevens: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vkvwpdf: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    betaaltermijnvkvw: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    domkleur: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    minafsluitkost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    maxafsluitkost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 9999.00
    },
    commissiefacturentonen: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    reminder2: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    reminder2datum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    paymentlistmailen: {
      type: DataTypes.TINYINT,
      allowNull: false
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
    eigenpops: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    gsm: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    incassorekening: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    randomcodes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    randomcodedatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    specialemelding: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    specialemeldingdatum: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    activiteit: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    laatstefileaanlevering: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    autojuridischvanaf: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    importnotas: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    telefoon2achterzijde: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    verbodendagenbrieven: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    verbodendagenalles: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    factuurvw: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    factuurkleuraccent: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    factuuradres: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nieuwboekjaar: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    jaarlijksenummering: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    aanvangsfactuurnr: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurgemeente: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    betalingenteveelaanklant: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    betalingenteveelaanklantopm: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    boekhoudsuggestieverbergen: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aanspreking3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    voornaam3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    naam3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    email3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    telefoon3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    gsm3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extralogin1: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extralogin2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extralogin3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extraemail1: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extraemail2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extraemail3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extrawachtwoord1: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extrawachtwoord2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extrawachtwoord3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    ibanindividueel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bicindividueel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    aantaldagenvoorbetaling: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuurafzendregel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    collectieve: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    nieuwportaalgebruikt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    aboopmerkingintern: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    batchperkeer: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    brfdwvanaf: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    brfdw: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    email3cc: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    sumier: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    brfadvvanaf: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    internjuridischvanaf: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    extralogin4: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extralogin5: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extraemail4: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extraemail5: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extrawachtwoord4: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extrawachtwoord5: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    domfactipvnota: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    firmanaamsms: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extralogin6: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extraemail6: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extrawachtwoord6: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extralogin7: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extraemail7: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extrawachtwoord7: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extrawachtwoord8: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extralogin8: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extraemail8: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extralogin9: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extraemail9: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extrawachtwoord9: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extralogin10: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extraemail10: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extrawachtwoord10: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    fiscaalattestdatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    geforceerdmaandelijkseattesten: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    signed_privacy_statement: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    signed_privacy_statement_dt: {
      type: DataTypes.STRING(220),
      allowNull: true
    },
    signatory_username: {
      type: DataTypes.STRING(220),
      allowNull: true
    },
    allownewpercentage: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    isdossierlevel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    include_ik_cost: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    tableName: 'klanten',
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
        name: "taalkeuze",
        using: "BTREE",
        fields: [
          { name: "taalkeuze" },
        ]
      },
      {
        name: "aanspreking",
        using: "BTREE",
        fields: [
          { name: "aanspreking" },
        ]
      },
      {
        name: "standaardtrein",
        using: "BTREE",
        fields: [
          { name: "standaardtrein" },
        ]
      },
      {
        name: "aanspreking2",
        using: "BTREE",
        fields: [
          { name: "aanspreking2" },
        ]
      },
      {
        name: "verkoopsvoorwaardenaanwezig",
        using: "BTREE",
        fields: [
          { name: "verkoopsvoorwaardenaanwezig" },
        ]
      },
      {
        name: "gecheckt",
        using: "BTREE",
        fields: [
          { name: "gecheckt" },
        ]
      },
      {
        name: "actief",
        using: "BTREE",
        fields: [
          { name: "actief" },
        ]
      },
      {
        name: "categorieapart",
        using: "BTREE",
        fields: [
          { name: "categorieapart" },
        ]
      },
      {
        name: "btwherinnering",
        using: "BTREE",
        fields: [
          { name: "btwherinnering" },
        ]
      },
      {
        name: "standaardtreindom",
        using: "BTREE",
        fields: [
          { name: "standaardtreindom" },
        ]
      },
      {
        name: "commissiefacturentonen",
        using: "BTREE",
        fields: [
          { name: "commissiefacturentonen" },
        ]
      },
      {
        name: "paymentlistmailen",
        using: "BTREE",
        fields: [
          { name: "paymentlistmailen" },
        ]
      },
      {
        name: "incassorekening",
        using: "BTREE",
        fields: [
          { name: "incassorekening" },
        ]
      },
      {
        name: "jaarlijksenummering",
        using: "BTREE",
        fields: [
          { name: "jaarlijksenummering" },
        ]
      },
      {
        name: "aanspreking3",
        using: "BTREE",
        fields: [
          { name: "aanspreking3" },
        ]
      },
    ]
  });
};
