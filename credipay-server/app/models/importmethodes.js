const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('importmethodes', {
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
    bestand: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    uitleg: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    klant: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    hulptekst: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    debiteurkeuze: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    factuuraanmaak: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'importmethodes',
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
