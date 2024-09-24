const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('batchtendens', {
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
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    batch: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    maand: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    dossiers: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    facturen: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    betaald: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    opendossiers: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    afbetaalplannen: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    schuldbemiddeling: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    onvindbaar: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    geslotendoorklant: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    berekend: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    percentbetaald: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    percentopendos: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    percentgeslotendos: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sluitreden3: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden4: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden5: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden6: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden11: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden12: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden13: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden14: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden15: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden16: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden18: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden19: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden20: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden21: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden23: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sluitreden24: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    afbetaalplanduur: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geslotendossiers: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    betaaldhs: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    betaaldextras: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aandeelklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    kostklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aandeelcs: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    nettoaandeelklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    tableName: 'batchtendens',
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
