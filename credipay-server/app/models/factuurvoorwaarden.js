const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('factuurvoorwaarden', {
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
    voorwaarden: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pdf: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    opmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    doc: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    contract_beveiligd: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    contract_onbeveiligd: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    voorwaarden2: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'factuurvoorwaarden',
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
