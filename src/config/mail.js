export default {
    host: process.env.MAIL_HOSTNAME,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD    
    },
};
