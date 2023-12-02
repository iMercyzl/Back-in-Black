class Login {

    Email: string;
    Password: string;

    constructor(rightEmail: string, rightPassword: string) {

        this.Email = rightEmail;

        this.Password = rightPassword;

    }

    admin(email: string, password: string): boolean {

        if(email === this.Email && password === this.Password) {

            return true;

        } else {

            return false;

        }

    }

    user(email: string, password: string): boolean {

        if(email === this.Email && password === this.Password) {

            return true;

        } else {

            return false;

        }

    }

}

const login = new Login('pedro@pedro.com', '123456');

const loginAdmin = login.admin('paulo@paulo.com', '123456');
const loginUser = login.user('paulo@paulo.com', '123456');

console.log(loginAdmin);