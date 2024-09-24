const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('importtijdelijk3', {
    A: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    B: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    C: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    D: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    E: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    G: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    H: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    I: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    J: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    K: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    L: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    M: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    N: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    O: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    P: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Q: {
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
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    AY: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    AZ: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    BA: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    isorginal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'importtijdelijk3',
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
