const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('klanten_cost', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    klanten_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    module: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cost_from: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    cost_to: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    cost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    max_value: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    tableName: 'klanten_cost',
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
