const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preprospectie', {
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
    doorwie: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    uitleg: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'preprospectie',
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
