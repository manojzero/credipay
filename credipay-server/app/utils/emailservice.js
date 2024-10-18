const nodemailer = require('nodemailer')
// const hbs = require('nodemailer-express-handlebars')
const path = require('path')
const ApiError = require('../utils/ApiError')
const httpStatus = require("http-status");
const db = require("../config/dbconfig");
const Sequelize = require('sequelize');
const config=require('../config/config');
const { Op, where } = require("sequelize");


var transporter_ebnr = nodemailer.createTransport({
    host: config.eMAIL_HOST,
    port: config.eMAIL_PORT,
    pool: config.eMAIL_POOL,
    tls: {
      ciphers: 'SSLv3'
    },
    secure: false,
    auth: {
      user: config.eMAIL_USERNAME_EBNR,
      // pass: '12345678'
      pass: config.eMAIL_PASSWORD_EBNR
    },
    dkim: {
      domainName: "ebnr.org",
      keySelector: "ebnr2024",
      privateKey: "-----BEGIN RSA PRIVATE KEY----- MIIEpAIBAAKCAQEAudUXTm9YAgbdxXWglm75gZwCV6mRrawAp7gGO+tbHx79pHML yBfKgqyPI8uRvVCOXxfTDKq/HhM8J1QT3QCjW0GHPAaP0fZTksFGGpcdBFfabg/d faHi+EibIIwMwSOZhjEabVBpi+p9glYJujWYtqglZ06A7GII8g1F+uaPT9QsaGpm C4g5JJXzYwBwBBW/ulgbj7oIucSPp9VYXU2azM6yPet8mZVqZ8R0tEVJNCqKKMpb 7NT1t3Kb2jNXCdGmgUCP55441Z51pR2RzPtRCdjMGxpyRu6mYPvVOWWvdpKbdFou pehr/ufpR/JFMa1pheG38psmL8NzQtMnrxkjoQIDAQABAoIBABcbVQOOur29xtOn take8W1ZTb1Cu3eB3K7+JeBLepAbFWTeXUerFaY7+Kx1wpBstNdEKhz4Gj2OHLuz K6keTDGrqzoegsGTxH6KA8KIqbYBioqG9H6Lo6JFvOxGHcviNlPGRUf0aLtaE/Mh 6aG6yltj+wqma0d5RS170wjIpGdDfzrY7fbpQzMGj0uCUtuFfgOv32/smxLOBrXC nLDjw9FyS97Yu9xgV1MxZ5gOkfxT+RuHUYejr0x0X9lDe+FvikThQw/kcyUmSpW0 rj7F/poGcB4twfRXcyeTR4+P10prXIBiQJ6pO4pSvDy9fyWSDZDA9OByGjsv+gBX f6bhLpUCgYEA7HXArgnId5/vkAsCJ4GYozCt+t5RI5Qg/fekVRizA99QlXGfFWn+ 1jQMZPkDa5WHj0zpLGsf8+qdSAex7mzXitQbfk+gG+LLivthdPgJf7BDs+k+8uQK uUKLYZsuMRpQL27EujQmM4MuB+Y0jzqwkxfMmcVFHjm3/cUFt4BiXI8CgYEAyTBT TWPBoymN5+GKKYocjoFf4/Fmif/gBs9INtXiKXCteehFJ8mDzVxAsQhQGGZvypcB OhhFnJu9+gS6O9FtOLjQgGuueaKTl7JFdcjXoytere4hfF4KLIt3e/q4lQCaCmRu 4JPBFVgPwEl3OCVhlLdTXMY7pxmRiCRRMUco9M8CgYEA5tiKlB4O7OJiMYDdyI3X 4zGKGIlkM1TQ5MAYWc90LQqeFFfJlFFXre1AUG9ebHCd2EOgvHGUzz8z73c7uWXf A7TRZn379F10kymZWmUweM0vO3wxrVT+NyEFC/RAo0VqFPSR8KsqxE2D6chPdak5 a1DnuROCx+BXhNMNIrmezXcCgYEAjAvrsM9kF2PxuBwzxL6zKi+8xDtiGWXYWGUp 66HvENGysE2S9iM8cFNrZNBYkOOdpfR/kiUbL+zpzYRE7ybVVMqxuPM8PMeC3fHm kBsCoD6sZX6CKMR9aIyc29ynaHFGyT0oQYQYv/bQ4BVDu/2pc5A5ozcKh0MxHwfI zPiv9dkCgYBQytwteyXuJuDPzjbGY9F33B/PzbQEl6RSySoCbCAI5DhXp4OvQTtr 4gNK26ORK+d151/jsErF+9H4XCQs15d9Mggol1J0hPHOp51LNmM3dMplt/Gm4UBX JSsMRUEFfOF6rp3cfSOaV9h4QsnjF27KEVJ1NHBjgGI/YSxM/6F79g== -----END RSA PRIVATE KEY-----"
    }
  })



const emailsendBytitle = async (mapObj, template_name, lang, email)=>{
    const { dossiermanueleitems } = db;
    try {
        let result = await dossiermanueleitems.findOne({
            where:{ titel : template_name }
        })
        var emailTemplateText = ''
        const row = result[0];

        if (row.hasOwnProperty(lang)) {
            emailTemplateText = row[lang];
            
            Object.keys(mapObj).forEach(function (keys) {
                emailTemplateText = emailTemplateText.replaceAll(keys, mapObj[keys])
            })

            console.log(`The value of ${lang} is: ${emailTemplateText}`);
        } 
        await sendEmail(email,subject,emailTemplateText)
    } catch (error) {

        
    }
}

const sendEmail = async (to_address,subject,emailTemplateText)=>{

    try {
        let mailOptions = {
            from: "", // sender address
            to: to_address, // list of receivers
            cc: config.eMAIL_CC_LIST,
            subject: subject,
            html: emailTemplateText, // the name of the template file i.e email.handlebars
          }

          var result = {};
          result = await transporter_ebnr.sendMail(mailOptions)
    } catch (error) {
        
    }
}

module.exports = {
    emailsendBytitle,
    sendEmail
}