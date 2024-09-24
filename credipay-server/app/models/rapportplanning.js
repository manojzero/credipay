const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rapportplanning', {
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
    rapport: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    frequentieweken: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    frequentiemaanden: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    datum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    verzenden: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    volgendedatum: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    autogoedkeur: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    intern: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    hulpinteger1: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hulpinteger2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hulpinteger3: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hulpinteger4: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hulpinteger5: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hulptxt1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hulptxt2: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'rapportplanning',
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
