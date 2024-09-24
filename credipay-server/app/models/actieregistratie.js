const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('actieregistratie', {
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
    medewerker: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    dossier: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    taak: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    positief: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    prospect: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    preprospect: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    agenda: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    aantal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    week: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    debiteur: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    debiteur2: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'actieregistratie',
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
