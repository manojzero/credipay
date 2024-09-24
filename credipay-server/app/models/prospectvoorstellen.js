const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prospectvoorstellen', {
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
    prospect: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    klant1: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klant2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klant3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    intern1: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    intern2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    intern3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    intern4: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    intern5: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    opmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    klantnaam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    dossiers: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    omzet: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ebit: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    klantauto1: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klantauto2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klantauto3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klantauto4: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klantauto5: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klantauto6: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klantauto7: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klantauto8: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klantauto9: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    klantauto10: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'prospectvoorstellen',
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
