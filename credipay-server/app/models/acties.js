const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acties', {
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
    volgorde: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    treinid: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vanstatus: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    naarstatus: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tijdsbepaling: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    multiple: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    betaald: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    afsluiten: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    afbetaalplan: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    anderdossierstatus: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bestemmeling: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    verwerkt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    huidigestatusuitvoeren: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    tijdsbepaling2: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'acties',
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
