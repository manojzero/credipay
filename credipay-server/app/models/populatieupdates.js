const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('populatieupdates', {
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
    rij: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dossier: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    debiteur: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuur: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    naam: {
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
      type: DataTypes.STRING(220),
      allowNull: false
    },
    adres2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    postcode2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    gemeente2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    land2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    opmerking: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    verwerkt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'populatieupdates',
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
