const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('standaardrapporten', {
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
    rapid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    raptitel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    waarde0: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde1: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde2: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde3: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde4: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde5: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde6: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde7: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde8: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde9: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde10: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde11: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde12: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde13: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde14: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde15: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde16: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde17: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde18: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde19: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde20: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde21: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde22: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde23: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde24: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde25: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde26: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde27: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde28: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde29: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde30: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde31: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde32: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde33: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde34: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde35: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde36: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde37: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde38: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde39: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde40: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde41: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde42: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde43: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde44: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde45: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde46: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde47: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde48: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde49: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    waarde50: {
      type: DataTypes.DECIMAL(10,4),
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
    nl: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    fr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    en: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    de: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'standaardrapporten',
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
        name: "klant",
        using: "BTREE",
        fields: [
          { name: "klant" },
        ]
      },
      {
        name: "rapid",
        using: "BTREE",
        fields: [
          { name: "rapid" },
        ]
      },
      {
        name: "datum",
        using: "BTREE",
        fields: [
          { name: "datum" },
        ]
      },
    ]
  });
};
