const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smsfeedback', {
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
    ontvanger: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    deliverycode: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    extrainfo: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    aantalcredits: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    gecheckt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    dossier: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'smsfeedback',
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
