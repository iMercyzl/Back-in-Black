class Usuarios {

    id: number;
    name: string;
    lastname: string;
    email: string;
    status: boolean;

    constructor(id: number, name: string, lastname: string, email: string, status: boolean,) {

        this.id = id;
        this. name = name;
        this.lastname = lastname;
        this.email = email;
        this.status = status;

        console.log(this.id, this.name, this.lastname, this.email, this.status)

    }

}

const usuarios = new Usuarios(12, 'Pedro', 'luiz', 'pedro@pedro.com', true);