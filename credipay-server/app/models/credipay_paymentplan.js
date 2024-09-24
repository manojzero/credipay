const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credipay_paymentplan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    from_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    to_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    plan_months: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    comments: {
      type: DataTypes.STRING(225),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    tableName: 'credipay_paymentplan',
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
