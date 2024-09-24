const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('templatesklanten', {
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
    titel: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    volgorde: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    zichtbaar: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    kleur: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    firmanaam: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    afzender1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afzender2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afzender3: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afzender4: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afzender5: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    handtekeningnl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    handtekeningen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    handtekeningfr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    handtekeningde: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    betaalkleur: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    stad: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    visualisatie: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rekening: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    emailtitelnl: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    emailtitelen: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    emailtitelfr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    emailtitelde: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    emailhandtekeningnl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    emailhandtekeningen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    emailhandtekeningfr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    emailhandtekeningde: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afzender5nl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afzender5en: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afzender5fr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afzender5de: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    onderwerpnl: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    onderwerpen: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    onderwerpfr: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    onderwerpde: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(220),
      allowNull: false
    },
    afzender4nl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afzender4en: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afzender4fr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    afzender4de: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    klant: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    template: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    inhoudnl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    inhouden: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    inhoudfr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    inhoudde: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    emailautomailingnl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    emailautomailingen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    emailautomailingfr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    emailautomailingde: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    voorbladfaxnl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    voorbladfaxen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    voorbladfaxfr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    voorbladfaxde: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    smsnl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    smsen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    smsfr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    smsde: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sendemail: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sendsms: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sendfax: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    enkelgewijzigdeinhoud: {
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
    tableName: 'templatesklanten',
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
