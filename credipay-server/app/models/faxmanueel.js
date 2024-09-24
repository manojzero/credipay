const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faxmanueel', {
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
    faxnummer: {
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
    betreft: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    faxopmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'faxmanueel',
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
