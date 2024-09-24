const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('verbodenfaxen', {
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
    fax: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    datum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    opmerking: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'verbodenfaxen',
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
