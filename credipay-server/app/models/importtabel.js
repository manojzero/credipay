const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('importtabel', {
    F1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F9: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F10: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F11: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F12: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F13: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F14: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F15: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F16: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F17: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    R: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    S: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    T: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    U: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    V: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    W: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    X: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Y: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Z: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AA: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AB: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AC: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AD: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AF: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AG: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AH: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AI: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AJ: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AK: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AL: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AM: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AN: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AO: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AP: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AQ: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AR: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AS: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AT: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AU: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AV: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AW: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AX: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AY: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AZ: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'importtabel',
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
