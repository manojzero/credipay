const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pwoorden', {
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
    toepassing: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    user: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    pasw: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'pwoorden',
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
