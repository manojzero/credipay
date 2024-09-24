const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stortingen', {
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
    rekening: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    boekingsdatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    afschriftnummer: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    transactienummer: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rekeningnummertegenpartij: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    naamtegenpartij: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    adrestegenpartij: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    gemeente: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    transactie: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    valutadatum: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bedrag: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    munteenheid: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bic: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    landcode: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    verwerkt: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    mededeling: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gestructureerdemededeling: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dosid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    debtid: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'stortingen',
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
        name: "afschriftnummer",
        using: "BTREE",
        fields: [
          { name: "afschriftnummer" },
        ]
      },
      {
        name: "transactienummer",
        using: "BTREE",
        fields: [
          { name: "transactienummer" },
        ]
      },
      {
        name: "boekingsdatum",
        using: "BTREE",
        fields: [
          { name: "boekingsdatum" },
        ]
      },
      {
        name: "bedrag",
        using: "BTREE",
        fields: [
          { name: "bedrag" },
        ]
      },
      {
        name: "verwerkt",
        using: "BTREE",
        fields: [
          { name: "verwerkt" },
        ]
      },
      {
        name: "gestructureerdemededeling",
        using: "BTREE",
        fields: [
          { name: "gestructureerdemededeling" },
        ]
      },
      {
        name: "dosid",
        using: "BTREE",
        fields: [
          { name: "dosid" },
        ]
      },
      {
        name: "debtid",
        using: "BTREE",
        fields: [
          { name: "debtid" },
        ]
      },
    ]
  });
};
