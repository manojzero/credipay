const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('planninglijst', {
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
    inhoud: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vernieuwd: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    weekplanning: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    medewerker: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'planninglijst',
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
