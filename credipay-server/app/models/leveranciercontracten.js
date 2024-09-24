const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('leveranciercontracten', {
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
    leverancier: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    van: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    tot: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    opzeggen_uiterlijk: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    uitleg: {
      type: DataTypes.STRING(220),
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
    bestand4: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'leveranciercontracten',
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
