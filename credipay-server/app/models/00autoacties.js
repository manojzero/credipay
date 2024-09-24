const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('00autoacties', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    komendvan: {
      type: DataTypes.INTEGER,
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
    actie: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    dagvan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dagtot: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uurvan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uurtot: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxkeren: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    volgorde: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uurvan2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uurtot2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minuutvan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minuutvan2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minuuttot: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minuuttot2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    zwaar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    aantal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aantalvorigemaand: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minuutveelvoud: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minuutveelvoud2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aantalperkeer: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    dagvan2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dagtot2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    opm: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    verlof: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    maanddagvan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maanddagtot: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maanddagtot2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maanddagvan2: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: '00autoacties',
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
      {
        name: "maanddagtot2",
        using: "BTREE",
        fields: [
          { name: "maanddagtot2" },
        ]
      },
      {
        name: "maanddagvan2",
        using: "BTREE",
        fields: [
          { name: "maanddagvan2" },
        ]
      },
      {
        name: "maanddagtot",
        using: "BTREE",
        fields: [
          { name: "maanddagtot" },
        ]
      },
      {
        name: "maanddagvan",
        using: "BTREE",
        fields: [
          { name: "maanddagvan" },
        ]
      },
      {
        name: "verlof",
        using: "BTREE",
        fields: [
          { name: "verlof" },
        ]
      },
      {
        name: "dagtot2",
        using: "BTREE",
        fields: [
          { name: "dagtot2" },
        ]
      },
      {
        name: "dagvan2",
        using: "BTREE",
        fields: [
          { name: "dagvan2" },
        ]
      },
      {
        name: "minuutveelvoud2",
        using: "BTREE",
        fields: [
          { name: "minuutveelvoud2" },
        ]
      },
      {
        name: "minuutveelvoud",
        using: "BTREE",
        fields: [
          { name: "minuutveelvoud" },
        ]
      },
      {
        name: "aantalvorigemaand",
        using: "BTREE",
        fields: [
          { name: "aantalvorigemaand" },
        ]
      },
      {
        name: "aantal",
        using: "BTREE",
        fields: [
          { name: "aantal" },
        ]
      },
      {
        name: "zwaar",
        using: "BTREE",
        fields: [
          { name: "zwaar" },
        ]
      },
      {
        name: "minuuttot2",
        using: "BTREE",
        fields: [
          { name: "minuuttot2" },
        ]
      },
      {
        name: "minuuttot",
        using: "BTREE",
        fields: [
          { name: "minuuttot" },
        ]
      },
      {
        name: "minuutvan2",
        using: "BTREE",
        fields: [
          { name: "minuutvan2" },
        ]
      },
      {
        name: "minuutvan",
        using: "BTREE",
        fields: [
          { name: "minuutvan" },
        ]
      },
      {
        name: "uurtot2",
        using: "BTREE",
        fields: [
          { name: "uurtot2" },
        ]
      },
      {
        name: "uurvan2",
        using: "BTREE",
        fields: [
          { name: "uurvan2" },
        ]
      },
      {
        name: "volgorde",
        using: "BTREE",
        fields: [
          { name: "volgorde" },
        ]
      },
      {
        name: "maxkeren",
        using: "BTREE",
        fields: [
          { name: "maxkeren" },
        ]
      },
      {
        name: "uurtot",
        using: "BTREE",
        fields: [
          { name: "uurtot" },
        ]
      },
      {
        name: "uurvan",
        using: "BTREE",
        fields: [
          { name: "uurvan" },
        ]
      },
      {
        name: "dagtot",
        using: "BTREE",
        fields: [
          { name: "dagtot" },
        ]
      },
      {
        name: "dagvan",
        using: "BTREE",
        fields: [
          { name: "dagvan" },
        ]
      },
    ]
  });
};
