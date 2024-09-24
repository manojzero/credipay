const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idfacturencsv', {
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
    maand: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    aantal: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    csv: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    gemaild: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    opmerking: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'idfacturencsv',
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
