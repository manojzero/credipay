const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('templatestreinen', {
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
    code: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    treinid: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    inhoudnl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    detailprint: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    closedossier: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    dubbelprinten: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    volgorde: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    bestemmeling: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    inhoudfr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    aangetekend: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    afbetaalplaninsluiten: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    titelfr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    kostprijs: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    inhouden: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    inhoudde: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    minuten: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    herberekenextras: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    voorbetalingen: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    briefinhoud_verso_zijde_nl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    briefinhoud_verso_zijde_en: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    briefinhoud_verso_zijde_fr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    briefinhoud_verso_zijde_de: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'templatestreinen',
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
