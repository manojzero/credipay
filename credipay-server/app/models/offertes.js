const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offertes', {
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
    prospect: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    uitleg: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'offertes',
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
