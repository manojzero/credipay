const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iddoorstortingenxml', {
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
    bestand1: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bedrag1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bedrag2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bedrag3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bedrag4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bestand4: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'iddoorstortingenxml',
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
