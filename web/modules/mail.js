//
//	邮件发送模块
//
var fc = require('./func'),
	nodemailer = require('nodemailer'),
	transport  = require('nodemailer-smtp-transport');

var config = {
	name: 'ANT',
	email: 'email@user.com',
	password: 'email-password'
}

module.exports = {
	_transport: nodemailer.createTransport(transport({
		host: 'smtp.qq.com',
		port: 465,
		secure: true,
		auth: {
			user: config['email'],
			pass: config['password']
		}
	})),
	send: function(opt, fn) {
		var _opt = {
			from: config['name'] + '<' + config['email'] + '>',
			to: opt.to,
			subject: opt.subject,
			html: opt.html
		};
		this._transport.sendMail(_opt, fn);
	}
}