const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rechtsplegingvergoeding', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    bedrag: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    minimum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    maximum: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    basis: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    tableName: 'rechtsplegingvergoeding',
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
