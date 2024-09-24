const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('populatieaanvraag', {
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
    dossier: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    debiteur: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    origineel: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    voltooid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    naam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    reactie: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'populatieaanvraag',
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
