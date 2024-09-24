const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('budgetsubcat', {
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
    categorie: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    db3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    tabel3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bedragveld3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    datumveld3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    voorwaarde3: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    db2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    tabel2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    bedragveld2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    datumveld2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    voorwaarde2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel2: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    db1: {
      type: DataTypes.STRING(220),
      allowNull: false,
      defaultValue: "db4"
    },
    tabel1: {
      type: DataTypes.STRING(220),
      allowNull: false,
      defaultValue: "idonkostenpers"
    },
    bedragveld1: {
      type: DataTypes.STRING(220),
      allowNull: false,
      defaultValue: "bedrag"
    },
    datumveld1: {
      type: DataTypes.STRING(220),
      allowNull: false,
      defaultValue: "datum"
    },
    voorwaarde1: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'budgetsubcat',
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
