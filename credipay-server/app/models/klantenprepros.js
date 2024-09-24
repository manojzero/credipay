const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('klantenprepros', {
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
      type: DataTypes.BIGINT,
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
    telefoon: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    gsm: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fax: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    website: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    oprichting: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    omzet: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    werknemers: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    naam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    taal: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    categorie: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    voltooid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    herinneringsdatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    opmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    voltooidatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    gebeld: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    volgorde: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    functie: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    herinnering: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'klantenprepros',
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
