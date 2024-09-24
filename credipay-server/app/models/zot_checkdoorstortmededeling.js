const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zot_checkdoorstortmededeling', {
    x: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    y: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'zot_checkdoorstortmededeling',
    timestamps: false
  });
};
