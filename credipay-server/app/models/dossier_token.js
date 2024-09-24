const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dossier_token', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    blackListed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    dossier_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    tableName: 'dossier_token',
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
      {
        name: "FK_dossiers",
        using: "BTREE",
        fields: [
          { name: "dossier_id" },
        ]
      },
    ]
  });
};
