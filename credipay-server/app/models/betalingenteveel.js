const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('betalingenteveel', {
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
    datum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    debiteur: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    dossier: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bedragstorting: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bedragteveel: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    opmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    teruggestort: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    gestortaanklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    indossier: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    rest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    debiteurid: {
      type: DataTypes.BIGINT,
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
    betaaldatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    opmerking2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    verberg: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'betalingenteveel',
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
