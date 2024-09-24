const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fiscaleattesten', {
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
    debiteur: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    dossier: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuur: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    referentie: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    hoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    betaaldvoorincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    betaaldtijdensincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    saldo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    brieftype: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    pdf: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    factuurdatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    minnelijk: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    advocaat: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    bulkattestid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    juridisch: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'fiscaleattesten',
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
