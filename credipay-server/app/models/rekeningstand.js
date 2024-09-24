const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rekeningstand', {
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
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    datum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rekeningstand: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    opmerking: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    rekeningafschrift: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'rekeningstand',
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
