const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preprospecten', {
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
    firmanaam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    btw: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    adres: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    gemeente: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    website: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    taalkeuze: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sector: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    naam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    voornaam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    tel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    fax: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    opmerking: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gecheckt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mogelijkedubbels: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    via: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    emailselectie: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 1
    },
    emaildatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    telselectie: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 1
    },
    teldatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    faxselectie: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    faxdatum: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    emailvoltooid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    telvoltooid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    faxvoltooid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    btwovergedragen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    gsm: {
      type: DataTypes.STRING(220),
      allowNull: false
    }
  }, {
    tableName: 'preprospecten',
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
      {
        name: "via",
        using: "BTREE",
        fields: [
          { name: "via" },
        ]
      },
      {
        name: "sector",
        using: "BTREE",
        fields: [
          { name: "sector" },
        ]
      },
    ]
  });
};
