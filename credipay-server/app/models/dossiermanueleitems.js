const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dossiermanueleitems', {
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
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    nl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fax: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    email: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    brief: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    emailklant: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    volgorde: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sms: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    de: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dom: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    kleur: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    leegregel: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'dossiermanueleitems',
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
