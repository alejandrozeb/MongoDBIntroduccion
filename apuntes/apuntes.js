/* 
ORM de nodejs

No solo SQL  NOSQL
para aplicaciones que manejan big data 
es escalable y general mediante cluster.
ESCRITO EN C++ Y MULTIPLATAFORMA.
Oreintaddo a documentos
Es orientado a objetos y cada registro que guardemos se llamra documento. 
Siguen un schema
Scalado horizontal, mientras vaya creciendo podemos agregar mas carga u otro cluster
Usa JSON como datos.

instalacion
https://www.mongodb.com/try/download/community

C:\Program Files\MongoDB\Server\4.4\data\
C:\Program Files\MongoDB\Server\4.4\bin

agregamos al path

mongod --version para ver la version
mongod para ejecutar mongo en consola

en otra pantalla de consola ejecutamos
mongo
que es el interprete y se conecta a mongod en el puerto 27017

EL intepreta porcesa datos
2+2

MONGODB
BASE DE DATOS
    se encarga de almacenar todos los datos con el contexto de una apliacacion.
        usuarios, vendedores,ventas.
    a la organizacion de estos datos se los llama como
COLECCIONES
   la colecciones serán:
        coleccion usuarios
        coleccion productos
        coleccion categorias
        coleccion ventas
    guardamos distintos datos en cada coleccion, como sus atributos. estos datos se gurdan en un objeto json.
    en sql serian las tablas.

DOCUMENTOS
    Son los datos en formato Json.

Shell MOngo
    Nos permite interaciion con la bd
    ademas es un interprete de js.
    acceso a operadores, librerias, crear funciones

    si usamos 
    db
    sale la base de datos que estamos usando.
    show dbs
    muestra todas las bd
    admin   0.000GB
    config  0.000GB
    local   0.000GB
    Por defecto

    CUando nos conectamos por defecto estamos en test
    help 
    nos muestra todas la opciones de ayuda

    use web store
    crea y cambia a la base de datos llamada web store.

    Mongodb con use no gurda la bd hasta que guademos (insertar) un documento o dato en esa bd.
    Al insertar podemos ver que se guardo la bd con:
    show dbs
    
*/