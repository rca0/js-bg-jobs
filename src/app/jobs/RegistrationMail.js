import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'Queue ruanc.dev <queue@ruanc.dev>',
            to: `${user.name} <${user.mail}>`,
            subject: 'Register user',
            html: `Hi, ${user.name}, welcome to queue ruanc.dev system.`
        });
    },
};
