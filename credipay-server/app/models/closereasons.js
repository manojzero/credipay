const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('closereasons', {
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
    tekst: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    commissie: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
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
    },
    code: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'closereasons',
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
