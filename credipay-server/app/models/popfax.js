const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('popfax', {
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
    email: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    onderwerp: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    inhoud: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    faxnr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    gebruiker: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    paswoord: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    domein: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    opmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    inhoud2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email2: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'popfax',
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
