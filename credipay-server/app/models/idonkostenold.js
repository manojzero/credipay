const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idonkostenold', {
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
    leverancier: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    omschrijving: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bedrag: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    btw: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bedragincl: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    afrekening: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    leverancier2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bestand: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'idonkostenold',
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
