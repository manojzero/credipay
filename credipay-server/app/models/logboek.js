const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logboek', {
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
    dossier: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    omschrijving: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    datum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    omschrijvingintern: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bestand: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    verwerkt: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    template: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bestand2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    verwerkingsdatum: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    emailverzonden: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    faxverzonden: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    smsverzonden: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    debiteur: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dosclose: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    paginas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bezig: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    teldoor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    smsmsgid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    smsmsgidtxt: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    smsresponse: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    smsfeedback: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    adres: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dossier_temp: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'logboek',
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
        name: "dossier",
        using: "BTREE",
        fields: [
          { name: "dossier" },
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
        name: "template",
        using: "BTREE",
        fields: [
          { name: "template" },
        ]
      },
      {
        name: "verwerkingsdatum",
        using: "BTREE",
        fields: [
          { name: "verwerkingsdatum" },
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
        name: "klant",
        using: "BTREE",
        fields: [
          { name: "klant" },
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
        name: "emailverzonden",
        using: "BTREE",
        fields: [
          { name: "emailverzonden" },
        ]
      },
      {
        name: "faxverzonden",
        using: "BTREE",
        fields: [
          { name: "faxverzonden" },
        ]
      },
      {
        name: "smsverzonden",
        using: "BTREE",
        fields: [
          { name: "smsverzonden" },
        ]
      },
      {
        name: "smsmsgid",
        using: "BTREE",
        fields: [
          { name: "smsmsgid" },
        ]
      },
      {
        name: "smsresponse",
        using: "BTREE",
        fields: [
          { name: "smsresponse" },
        ]
      },
      {
        name: "verwerkt",
        using: "BTREE",
        fields: [
          { name: "verwerkt" },
        ]
      },
      {
        name: "dossier_temp",
        using: "BTREE",
        fields: [
          { name: "dossier_temp" },
        ]
      },
    ]
  });
};
