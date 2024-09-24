const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idafrekeningintern', {
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
    commissie: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    inkomsten: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    onkosten: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    onkosten2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    teverdelen: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    percent1: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    percent2: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    percent3: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    percent4: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aandeel1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aandeel2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aandeel3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    aandeel4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    onkostpers1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    onkostpers2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    onkostpers3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    onkostpers4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    totaal1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    totaal2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    totaal3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    totaal4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    percent7: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aandeel7: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    onkostpers7: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    totaal7: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    tableName: 'idafrekeningintern',
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
