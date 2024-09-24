const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('materiaalvoorraad', {
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
    papier: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    enveloppen: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    bpost: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    printer: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    opmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'materiaalvoorraad',
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
