const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smsinkomend', {
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
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bericht: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afzender: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    debtid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dosid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    debtnaam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    verwerkt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'smsinkomend',
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
