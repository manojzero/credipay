const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('importverisure', {
    administration_id: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    debiteur_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    invoice_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    internalInvoice_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    invoiceDate_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    invoiceDueDate_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    currencyCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    originalInvoiceAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    paidAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    openAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    baseCurrencyCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    baseCurrencyOriginalAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    baseCurrencyPaidAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    baseCurrencyOpenAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    currentDunningPhase: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    currentDunningDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    structuredCommunication: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    dispute: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    installationNumbers: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empty: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "This should be empty, if not empty, something in CSV is wrong"
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'importverisure',
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
        name: "ID",
        using: "BTREE",
        fields: [
          { name: "debiteur_id" },
          { name: "invoice_id" },
        ]
      },
      {
        name: "debiteur_id",
        using: "BTREE",
        fields: [
          { name: "debiteur_id" },
        ]
      },
      {
        name: "Invoice_id",
        using: "BTREE",
        fields: [
          { name: "invoice_id" },
        ]
      },
    ]
  });
};
