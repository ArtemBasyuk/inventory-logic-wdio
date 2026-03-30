const logger = require('../utils/logger');

class LoginPage {
    get username() { return $('//input[@id="user-name"]'); }
    get password() { return $('//input[@id="password"]'); }
    get loginBtn() { return $('//input[@id="login-button"]'); }

    async login(user, pass) {
        logger.info('Logging in...');
        await this.username.setValue(user);
        await this.password.setValue(pass);
        await this.loginBtn.click();
    }
}

module.exports = new LoginPage();
