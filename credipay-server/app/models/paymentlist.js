const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paymentlist', {
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
    doorstortdatum: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    factuur: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bedragklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bedragincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    hoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    intrest: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    schadebeding: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    inningskost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    aandeelklant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aandeelincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aandeelincassoinclbtw: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    doorgestort: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    overzichtsbestand: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    doortestorten: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    datum: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00"
    },
    aandeelincassoincl: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    klantcategorie: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    xlsontvangencs: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    xlsontvangenklant: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    xlsboekhoudsuggestie: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    wa1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wa2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wa3: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    wa1teller: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    wa2teller: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    wa3teller: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    xlsboekhoudsuggestie2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    xmlbestand: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    tonen: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    xlsaangemaaktefacturen: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    xmlbestand2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    doorgestortbedrag: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    tableName: 'paymentlist',
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
