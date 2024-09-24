const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kosten', {
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
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dossier: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kostprijs: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    datum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    opmerking: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    opstartkost: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    populatiekost: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    voortijdig: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    klantcategorie: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    dosclose: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dossierrecht: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    ontvangen: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    btwaanrekenen: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    tableName: 'kosten',
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
        name: "klant",
        using: "BTREE",
        fields: [
          { name: "klant" },
        ]
      },
      {
        name: "dossier",
        using: "BTREE",
        fields: [
          { name: "dossier" },
        ]
      },
      {
        name: "datum",
        using: "BTREE",
        fields: [
          { name: "datum" },
        ]
      },
      {
        name: "opmerking",
        using: "BTREE",
        fields: [
          { name: "opmerking" },
        ]
      },
      {
        name: "opstartkost",
        using: "BTREE",
        fields: [
          { name: "opstartkost" },
        ]
      },
      {
        name: "factuur",
        using: "BTREE",
        fields: [
          { name: "factuur" },
        ]
      },
      {
        name: "klantcategorie",
        using: "BTREE",
        fields: [
          { name: "klantcategorie" },
        ]
      },
      {
        name: "dosclose",
        using: "BTREE",
        fields: [
          { name: "dosclose" },
        ]
      },
      {
        name: "ontvangen",
        using: "BTREE",
        fields: [
          { name: "ontvangen" },
        ]
      },
      {
        name: "btwaanrekenen",
        using: "BTREE",
        fields: [
          { name: "btwaanrekenen" },
        ]
      },
    ]
  });
};
