var Usuarios = /** @class */ (function () {
    function Usuarios(id, name, lastname, email, status) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.status = status;
        console.log(this.id, this.name, this.lastname, this.email, this.status);
    }
    return Usuarios;
}());
var usuarios = new Usuarios(12, 'Pedro', 'luiz', 'pedro@pedro.com', true);
//# sourceMappingURL=index.js.map