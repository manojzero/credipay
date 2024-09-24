const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rapporten', {
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
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    datum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    goedgekeurd: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    online: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    uitleg: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gemaild: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    temailen: {
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
    type: {
      type: DataTypes.BIGINT,
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
    bestand11: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand12: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand13: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand14: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bestand15: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    intern: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'rapporten',
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
