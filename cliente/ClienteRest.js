function ClienteRest() {
    this.nick;
    this.agregarUsuario = function (nick) {
        let cli = this;
        $.getJSON("/agregarUsuario/" + nick, function (data) {
            console.log(data);
            if (data.nick != -1) {
                console.log("Usuario " + data.nick + " registrado")
                cli.nick = data.nick;
                //iu.mostrarHome();//iu.mostrarHome(data.nick)
            }
            else {
                console.log("No se ha podido registrar el usuario")
                //iu.mostrarModal("Aviso","El nick ya está en uso");
                //iu.mostrarAgregarUsuario();
            }
        });
    }
    this.obtenerUsuarios = function () {
        $.getJSON("/obtenerUsuarios", function (data) {
            console.log(data);
            //iu.mostrarUsuarios(data);
        });
    }
}
