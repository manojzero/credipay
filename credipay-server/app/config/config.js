const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string()
            .valid("production", "development", "test")
            .required(),
        PORT: Joi.number().default(2000),
        DATABASE_NAME: Joi.string().required().description("DB name"),
        DATABASE_USER: Joi.string().required().description("DB username"),
        DATABASE_PASS: Joi.string().required().description("DB password"),
        DATABASE_HOST: Joi.string().required().description("DB host"),
        DATABASE_PORT: Joi.string().required().description("DB port"),
        DATABASE_LOGGING: Joi.string()
            .required()
            .description("Sequelize query logging"),
        JWT_SECRET: Joi.string().required().description("JWT secret key"),
        PAYMENT_URL: Joi.string().required().description("payment url"),
        VAT_NUMBER: Joi.string().required().description("vat number"),
        PAYMENT_SUCCESS_URL: Joi.string().required().description("payment success url"),
        PAYMENT_ERROR_URL: Joi.string().required().description("payment error url"),
        PAYMENT_CANCEL_URL: Joi.string().required().description("payment cancel url"),
        COOKIE_ID: Joi.string().required().description("auth cookie id")
    })
    .unknown();   

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    nodeEnv: envVars.NODE_ENV,
    port: envVars.PORT,
    database: {
        dbPort: envVars.DATABASE_PORT,
        dbHost: envVars.DATABASE_HOST,
        dbName: envVars.DATABASE_NAME,
        dbuser: envVars.DATABASE_USER,
        dbPass: envVars.DATABASE_PASS,
        dbLogging: envVars.DATABASE_LOGGING,
    },
    jwtConfig: {
        secret: envVars.JWT_SECRET
    },
    paymentConfig:{
        payment_url: envVars.PAYMENT_URL,
        vat_number: envVars.VAT_NUMBER,
        payment_success_url:envVars.PAYMENT_SUCCESS_URL,
        payment_error_url: envVars.PAYMENT_ERROR_URL,
        payment_cancel_url: envVars.PAYMENT_CANCEL_URL
    },
    COOKIE_ID:envVars.COOKIE_ID
};