class LoginPage {
    get username() { return $('//input[@placeholder="Username"]'); }
    get password() { return $('//input[@placeholder="Password"]'); }
    get loginBtn() { return $('//input[@value="Login"]'); }

    async login(user, pass) {
        await this.username.setValue(user);
        await this.password.setValue(pass);
        await this.loginBtn.click();
    }
}
module.exports = new LoginPage();