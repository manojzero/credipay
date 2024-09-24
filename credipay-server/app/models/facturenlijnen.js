const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facturenlijnen', {
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
    factuur: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dossier: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantal: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bedrag: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    btw: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bedragexcl: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bedragincl: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    volgorde: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    omschrijving: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'facturenlijnen',
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
