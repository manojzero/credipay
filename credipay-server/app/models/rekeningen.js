const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rekeningen', {
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
    rekeningnr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    uitleg: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    iban: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bic: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    intern: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    uitleg2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    verwachtstand: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    opmerking: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    verschil: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    verschiluitleg: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'rekeningen',
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
