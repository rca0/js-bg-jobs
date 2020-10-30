import Mail from '../lib/Mail';

export default {
    async store(req, res) {
        const { name, email, password } = req.body

        const user = {
            name, 
            email,
            password,
        };
        
        await Mail.sendMail({
            from: 'Queue ruanc.dev <queue@ruanc.dev>',
            to: `${name} <${email}>`,
            subject: 'Register user',
            html: `Hi, ${name}, welcome to queue ruanc.dev system.`
        });

        return res.json(user);
    }
};
