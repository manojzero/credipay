const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vergoedingadvdw', {
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
    aantaladv: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantalpop: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantaldw: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bedragadv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bedragpop: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bedragdw: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    juraandeelcs: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    bedragjurpop: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aantaljurpop: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantalcbb: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bedragcbb: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aandeeladv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aandeeldw: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    tableName: 'vergoedingadvdw',
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
