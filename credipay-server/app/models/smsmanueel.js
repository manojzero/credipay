const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smsmanueel', {
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
    gsmnummer: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    wie: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    van: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    inhoud: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    smsopmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'smsmanueel',
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
