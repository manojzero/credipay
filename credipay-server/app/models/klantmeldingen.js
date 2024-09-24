const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('klantmeldingen', {
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
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    inhoud: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gelezen: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    navid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    gelezendatum: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'klantmeldingen',
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
