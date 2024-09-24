const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scarlet', {
    factuur_ref: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'scarlet',
    timestamps: false,
    indexes: [
      {
        name: "factuur_ref",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "factuur_ref" },
        ]
      },
    ]
  });
};
