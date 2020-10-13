export class Empleado{
    constructor(
        public _id:string,
        public nombres: string,
        public apellidos: string,
        public correo:string,
        public password: string,
        public rol: string,
    ){
        
    }
}