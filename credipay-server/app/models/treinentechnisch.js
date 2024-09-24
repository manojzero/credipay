const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('treinentechnisch', {
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
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    omschrijving: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    volgorde: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    briefheader: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    brieffooter: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    emailheader: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    emailfooter: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    klanten: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    alleklanten: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    voorwaarde1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    voorwaarde2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    voorwaarde3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    scom1: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    scom2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    scom3: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    icom1: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    icom2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    icom3: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hcom1: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    hcom2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hcom3: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dossierkost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    footer1nl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    footer2nl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    footer8nl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    footer1fr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    footer2fr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    footer8fr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    titel1nl: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel1fr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel2nl: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel2fr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel8nl: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel8fr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    rekeningnr: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    rekeningnr2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantalstappen: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    afbetaalplan: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    kostprijs: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    titel1en: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel2en: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel8en: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel1de: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel2de: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel8de: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    footer1en: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    footer2en: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    footer8en: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    footer1de: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    footer2de: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    footer8de: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    aanmaning: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    volgordeweergave: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'treinentechnisch',
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
