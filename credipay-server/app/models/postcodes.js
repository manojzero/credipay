const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('postcodes', {
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
    postcode: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    gemeente: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    taal: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'postcodes',
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
