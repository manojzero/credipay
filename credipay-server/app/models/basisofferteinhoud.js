const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('basisofferteinhoud', {
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
    hfst: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    subhfst: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    volgorde: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    nl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afbeeldinggrootte: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afbnl1: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    afbnl2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    afbnl3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    afbnl4: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    afbnl5: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    afbfr1: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    afbfr2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    afbfr3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    afbfr4: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    afbfr5: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'basisofferteinhoud',
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
