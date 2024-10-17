const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credipay_transaction_payments', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    dossier_id: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('Online','Payment Plan'),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Success','Error'),
      allowNull: true
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'credipay_transaction_payments',
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
