let nombre = 'Julio';
let apellido = 'Rodríguez';

console.log(nombre, apellido);

let a= 10 ;
let b = 3 ;
console.log("suma numbers", a + b);
console.log (a - b);
console.log(a * b);
console.log(a%b) ;

let c= "10" ;
let d = "3" ;
console.log("suma de strings", c + d);
console.log (c - d);
console.log(c * d);
console.log(c%d) ;

let e = "10" ;
let f = 3 ;
console.log("suma de string y number", e + f);
console.log (e - f);
console.log(e * f);
console.log(e%f) ;

let edad = 15;
console.log(edad, "es mayor que 10:", edad > 10);
console.log(edad, "es menor que 18:", edad < 18);

let numero = 8;
console.log(numero, "es mayor que 5 Y menor que 10:", numero >5 && numero<10);

let nota =6 ;
console.log(nota , "¿es igual a 7?" ,nota==7);

let temperatura = 25;
console.log (temperatura , "¿es mayor o igual a 30?", temperatura >= 30);

let x = 10 ;
let y = 33;
console.log(x, "es igual a", y , x==y);
console.log(x, "es mayor que", y, x>y);

let edad2 = 17;
let tienePermiso = true ;
console.log("¿Puede conducir?", edad2 >= 18 || tienePermiso);

let usuario = "admin";
let contraseña = "1234";
console.log("¿acceso permitido?", usuario === "admin" && contraseña === "1234");   
