const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iddoorstortingen', {
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
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rekening: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bedrag: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    factuur: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    doorstortdatum: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    vanrekening: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    omschrijving: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    van: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    naar: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    vanbic: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    naarbic: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    doorgestort: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    iddoorstortxmlid: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'iddoorstortingen',
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
