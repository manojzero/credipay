const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('00import_temp', {
    s_nummer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    factuur_ref: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: '00import_temp',
    timestamps: false
  });
};
