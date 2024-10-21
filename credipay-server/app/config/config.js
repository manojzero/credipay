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
        COOKIE_ID: Joi.string().required().description("auth cookie id"),
        SMTP_HOST: Joi.string().description("Email host"),
        SMTP_PORT: Joi.number().description("port to connect to the email server"),
        SMTP_POOL: Joi.boolean().required().description("SMTP server Pool"),
        SMTP_USERNAME: Joi.string().required().description("username for email server"),
        SMTP_PASSWORD: Joi.string().required().description("password for password server"),
        EMAIL_FROM: Joi.string().required().description("the from field in the emails sent by the app"),
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

    email: {
        smtp: {
          host: envVars.SMTP_HOST,
          port: envVars.SMTP_PORT,
          pool: envVars.SMTP_POOL,
          auth: {
            user: envVars.SMTP_USERNAME,
            pass: envVars.SMTP_PASSWORD,
          },
        },
        from: envVars.EMAIL_FROM,
      },

    eMAIL_USERNAME: envVars.SMTP_USERNAME,
    eMAIL_PASSWORD: envVars.SMTP_PASSWORD,
    eMAIL_HOST: envVars.SMTP_HOST,
    eMAIL_PORT: envVars.SMTP_PORT,
    eMAIL_POOL: envVars.SMTP_POOL,
    eMAIL_CC_LIST: envVars.SMTP_MAIL_CC_LIST,
    eMAIL_FROM: envVars.EMAIL_FROM,
    COOKIE_ID:envVars.COOKIE_ID
};