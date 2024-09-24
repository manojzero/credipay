const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('basisoffertehfst', {
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
    volgorde: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    nl: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    fr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    offerte: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    presentatie: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'basisoffertehfst',
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
