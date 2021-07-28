import { Component, OnInit } from '@angular/core';

export interface Contacto {
  nombre: string;
  genero: string;
  isVip: boolean;
  estadoLaboral: number | string;
  empresa: string
}

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})

export class ContactosComponent implements OnInit {

  encabezado = "";
  descripcion = "";
  numeroContactos;
  //variable que nos permite saber si el formulario esta oculto o no
  //si el valor se cambia en la vista html se cambia en el controlador, aquí 
  formHidden = false;
  //cuando edite la pondré a true y gestion de los botones para ocultar o no
  editando = false;
  elementoEditado:Contacto;


  //array para usar con funcion guardarContacto()
  //es de tipo datosFormularioContacto
  //Se crea una interface Contacto que por eso pongo Contacto[] porque es un array 

  listaContactos: Contacto[]= [];
 

  //estado de la persona si esta trabajando o que
  estadosLaborales = [
    {id:0, descripcion: "trabajando"},
    {id:1, descripcion: "parado"},
    {id:2, descripcion: "estudiando"},
    {id:3, descripcion: "desconocido"},
  ]

  //campo donde guardo los campos del formulario
  datosFormularioContacto: Contacto = {
    nombre: '',
    genero: '',
    isVip: false,
    estadoLaboral: 0,
    empresa: ''
  };

  //servirá para actualizar el contador de los contactos que se registran
  actualizarContador(){
    //primera forma no valdría para eliminar contactos
    //this.numeroContactos = this.numeroContactos +1;

    //segunda opcion porque sirve el mismo médtodo para eliminar un contacto
    //miramos la longitud de array
    this.numeroContactos = this.listaContactos.length;
  }

  //funcion guardar contacto 
  //no guarda una copia si no un puntero y por ello sobreescribe los datos
  /*guardarContacto() {
    this.listaContactos.push({...this.datosFormularioContacto});
  } */

  // con las {} y los ... hacemos una copia del objeto
  guardarContacto() {

    //esto se ejecuta  si es un elemento nuevo
    if(this.editando==false) {
      this.listaContactos.push({...this.datosFormularioContacto});
    } else {
      //esto se ejecuta cuando tenemos un elemento que queremos editar
      //así busco la posicion del elemento que estoy editando
      var index = this.listaContactos.indexOf(this.elementoEditado);
      //elimina el elemento
      //this.listaContactos = this.listaContactos.splice(index,1);
      //para añadir un elemento en un array en una posición predeterminada
      //se usa también el splice
      //index es la posición que me he cargado y menos uno para que sea la anterior posición
      //el segundo parametro del splice es un 0 le indicamos que no borramos sino que añadimos un elemento nuevo, 
      //que vendría dado en el tercer parametro
      //this.listaContactos.splice((index-1),0,{...this.datosFormularioContacto});
      
      //otra forma con splice nos permite una unica linea sustituir un elmento
      //el primer parametro es la posicion, el segundo le ponemos un 1 para indicar el borrado y en el tercero 
      //el elemento que queremos insertar en el sitio
      //this.listaContactos = this.listaContactos.splice(index, 1,{...this.datosFormularioContacto});
      this.listaContactos.splice(index,1,{...this.datosFormularioContacto});
      
      //indicamos que queremos dejar de editar
      this.editando = false;
    }


    
    console.log({...this.listaContactos});
    //llamamos al método actualizarContador 
    this.actualizarContador();
  }


  borrarContacto(contacto:Contacto){
    //posibles implementaciones del borrado
    //podemos recorrer todo el array y eliminar el objeto
    
    //podemos buscar el objeto y borrarlo, esto nos devuelve la posicion del elemento buscado
    //permite borrar los que son iguales sin borrar todos ellos
    //var index = this.listaContactos.indexOf(contacto);
    //if(index > -1){
    //  this.listaContactos.splice(index,1);
    //}

    //podemos usar la función filter que es como search para filtrar
    //!== compara estrictamente 
    //borraría todos los que tengan el mismo nombre en este caso
    //this.listaContactos = this.listaContactos.filter(c => c.nombre !== contacto.nombre);
    
    //podemoso hacer lo mismo que con el slice cambiando la condicion y comparando todo el objeto 
    //no precisas de un id dado que comparo con todo el objeto
    this.listaContactos = this.listaContactos.filter(c => c !== contacto);
    
    //veremos el contador una vez que se borre el dato
    this.actualizarContador();
    //para que al editar y borrar no se queden los botones de descartar y nuevo registro visibles
    this.editando = false;

  }


  editarContacto(contacto:Contacto){

    //la forma más sencilla de cargar los datos al formulario de esa persona para actualizarlos
    this.datosFormularioContacto = contacto;

    //borrar el elemento existente y guardar uno nuevo en el sitio
    this.editando = true;
    //guardas una copia de lo editado
    this.elementoEditado = {...contacto};
  }


  //valor original antes de cambiarlo
  descartarCambios() {
    //indicamos que dejamos de editar
    this.editando = false;

    //busco el elemento que estamos modificando
    var index = this.listaContactos.indexOf(this.datosFormularioContacto);
    //lo sustituyo por su valor original
    this.listaContactos.splice(index, 1, { ...this.elementoEditado });

    //ponemos los valores a vacio de datos formulario contacto
    this.datosFormularioContacto = {
      nombre: '',
      genero: '',
      isVip: false,
      estadoLaboral: 0,
      empresa: ''
    };


  }

  //finaliza edición y pone vacío
  nuevoRegistro(){ 
    this.descartarCambios();
  }


  constructor() {
    this.encabezado = "Lista de contactos";
    this.descripcion = "Ejemplo de utilizacion de formularios";
    this.numeroContactos = 0;


    //inicializo la variable elementoEditable para que no de error 
    this.elementoEditado={
      nombre:'',
      genero:'',
      isVip:false,
      estadoLaboral:0,
      empresa:''
    }
   }

  ngOnInit(): void {
  }

}
