import nodemailer from 'nodemailer';
import configMail from '../../config/mail';

export default nodemailer.createTransport(configMail);
