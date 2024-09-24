const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dossiersjuridisch', {
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
    debiteur: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    minnelijkdossierold: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    minnelijkdossier: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    hoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    totaaltevorderen: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    geind: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aandeelklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aandeelcredisolv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    alarmdatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    volgendestatus: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    closed: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    closedate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    interneopmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    betaaldvoorincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    betaaldtijdensminnelijk: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    deurwaarder1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    deurwaarder2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    deurwaarder3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    deurwaarder4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    deurwaarderopmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    batch: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sumier: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    evaldone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    closereason: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    evaladres: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    evaladrespdf: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    evalcbb: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    evalcbbpdf: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    evalopmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    evaladresgedaan: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    evalcbbgedaan: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    aangetekdone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    docudone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    aangetekendschrijven: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    closedbycs: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'dossiersjuridisch',
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
