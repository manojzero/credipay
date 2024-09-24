const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smsverzending', {
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
    maand: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantal: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantalinkomend: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    krediet: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    krediet2: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'smsverzending',
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
