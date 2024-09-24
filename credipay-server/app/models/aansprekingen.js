const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aansprekingen', {
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
    nl: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    en: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    fr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    de: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'aansprekingen',
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
