const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sollicitanten', {
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
    naam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    geboortejaar: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ervaring: {
      type: DataTypes.TEXT,
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
    },
    opmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    evaluatie: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    aanmerking: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    gemeente: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    tel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    keuze1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keuze2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keuze3: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    werkt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'sollicitanten',
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
