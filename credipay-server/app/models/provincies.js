const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('provincies', {
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
    provincie: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    van: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tot: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    van2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tot2: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'provincies',
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
