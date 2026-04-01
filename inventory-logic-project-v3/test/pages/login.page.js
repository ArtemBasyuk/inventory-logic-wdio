class LoginPage {
    get username() { return $('//input[@id="user-name"]'); }
    get password() { return $('//input[@id="password"]'); }
    get loginBtn() { return $('//input[@id="login-button"]'); }

    async open() {
        await browser.url('/');
    }

    async login(credentials) {
        await this.username.setValue(credentials.username);
        await this.password.setValue(credentials.password);
        await this.loginBtn.click();
    }
}

module.exports = new LoginPage();