const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fiscaleattestenbulk', {
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
    aantal: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hoofdsom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    betaaldvoorincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    betaaldtijdensincasso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    saldo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    brieftype: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    pdf: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bijlagepdf1: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bijlagepdf2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bijlagepdf3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bijlagepdf4: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bijlagepdf5: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bijlagexls: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'fiscaleattestenbulk',
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
