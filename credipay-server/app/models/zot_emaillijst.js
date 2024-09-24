const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zot_emaillijst', {
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
    van: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    inhoud: {
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
    bestand5: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand6: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand7: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand8: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand9: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand10: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    dossier: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    verwerkt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    message_id: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    dossierdom: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    nieuwdossier: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    betaling: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    opvolgen: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    dossiernew: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'zot_emaillijst',
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
