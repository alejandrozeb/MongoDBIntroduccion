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


    show collections 
    muestra todas la coleccines en la bd.

    db.dropDtabase()
    elimina la base de datos actual, verifica que estas en la bd que quieres eliminar con el comando DB.

    ---------------COLLECTIONS----------

    db.createCollection("users")
    db.createCollection("products")
    db.createCollection("sellers")
    crea en la bd actual la colección users.

    db.products.drop()
    Elimina la coleccion products y rettorna un true.

    -------------Documentos--------------

    un objeto json
    key and value
    laave y valor
    {
        "nombre": "laptop",
        "precio": 40.2,
        "active": false,
        "created_at": new Date("12/12/1999"),
        "somedata": [1,"a",[]],
        "fabricante": {
            "nombre": "dell",
            "version": "xps",
            "location": {
                "city": "usa",
                "address": "asdasd"
            }
        }
    }
    {"nombre": "laptop","precio": 40.2,"active": false,"created_at": new Date("12/12/1999"),"somedata": [1,"a",[]],"fabricante": {"nombre": "dell","version": "xps","location": {"city": "usa","address": "asdasd"}}}

    todos los datos son de tipo string, int, booblean, date(podemos usar new date por que mongo tiene su interprete ), tambien podemos usar expresiones regulares, tambien se puden gurdar listas con diferentes tipos de dato,
    objetos qye van a contener otros atributos

    para insertar una coleccion 
    bd.products.insert({data});
    crea una coleccion products con los datos de data(json).

    db.products.find() muestra los productos o todos los datos de la coleccion.

    db.products.find().pretty() muestra los datos ordenados.

    mongo db transforma de json a bson para una busqueda mas rapida.
    CRUD
    Podemos gurdar docmuentos del mismo tipo pero de diferente estructura
    products={"name":"keyboard"}
    products={"name":"keyboard", "price": 9.99}
    son el mismo tipo de documentosen la misma coleccion pero con diferentes atributos.
    esta es una caracteristica de mongo no tiene estructura.
    

*/