const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contactgegevens', {
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
    volgorde: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    wie: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    tel1: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    tel2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    tel3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    opmerking: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    email2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    email3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    email4: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'contactgegevens',
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
