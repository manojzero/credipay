const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('statusjuridisch', {
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
    status: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    volgorde: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    uitleg: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    statusfr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    uitlegfr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    volgendestatus: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    nl: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    fr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    en: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    de: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    uitlegnl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    uitlegen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    uitlegde: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'statusjuridisch',
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
