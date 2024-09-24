const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('klantenemaillogboek', {
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
    nota: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    doorwie: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bestand1: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand4: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand5: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand6: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand7: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand8: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand9: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand10: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    import: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    importvoltooid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'klantenemaillogboek',
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
