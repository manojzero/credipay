const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brievenperdag', {
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
    brief11: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    brief12: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    brief13: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    brief21: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    brief22: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    brief23: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    totaal: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'brievenperdag',
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
