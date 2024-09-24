const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('debiteurcategorie', {
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
    klantcat: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    categorie: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    iban: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bic: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    verkoopsvoorwaardenaanwezig: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    artikelnummerintrest: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    intrestpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    artikelnummerschadebeding: {
      type: DataTypes.STRING(220),
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
    klant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    klantgegevens: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    betaaltermijn: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    inningskostpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    inningskostminimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    schadebedingdossierpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    schadebedingdossierminimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    inningskostdossierpercentage: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    inningskostdossierminimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    klantcode: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    tableName: 'debiteurcategorie',
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
