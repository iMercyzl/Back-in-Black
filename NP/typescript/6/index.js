var Login = /** @class */ (function () {
    function Login(rightEmail, rightPassword) {
        this.Email = rightEmail;
        this.Password = rightPassword;
    }
    Login.prototype.admin = function (email, password) {
        if (email === this.Email && password === this.Password) {
            return true;
        }
        else {
            return false;
        }
    };
    Login.prototype.user = function (email, password) {
        if (email === this.Email && password === this.Password) {
            return true;
        }
        else {
            return false;
        }
    };
    return Login;
}());
var login = new Login('pedro@pedro.com', '123456');
var loginAdmin = login.admin('paulo@paulo.com', '123456');
var loginUser = login.user('paulo@paulo.com', '123456');
console.log(loginAdmin);
