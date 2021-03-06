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
    
    se pueden añadir listas de documentos

    db.products.insert([
        {
            "name": "mouse",
            "description": "razer mouse",
            "tags": ["computers", "gaming"],
            "quantity": 14,
            "created_at": new Date()
        },
        {
            "name": "monitor",
            "description": "lg monitor",
            "tags": ["computers", "gaming"],
            "quantity": 3,
            "created_at": new Date()
        }
    ])

    con boton derechopuedes copiar texto a la consola de mongo
    -------------------BUSCAR DOCUMETNOS-------------
    db.products.find({"name": "mouse"})
        encuentra un documento con el nombre = mouse

    db.products.find({"price": 999.99})
        por el tipo de dato.
    db.products.find({"tags":"computers"})   
        encuentra a todos los que tienen tags.
    db.products.find({"tags":"computers","name":"monitor"}) 
        mas de una limitante
    db.products.findOne({"tags":"computers"})    
        solo devuelve el primer resultados de toda laa lista de resultados
    db.products.find({"tags":"computers"},{"name":1, "description":1})  
        Solo devuelve algunos datos, los que estan en valor de uno
    db.products.find({"tags":"computers"},{"name":1, "description":1,"_id":0})  
        el id viene por defecto en 1 para no verlo podemos darle el valor de 0.
    -----------------ORDENAS LOS DATOS-------------
    db.products.find({"tags":"computers"}).sort({name:1})   
        Ordena  alfabeticamente de a - z, por defecto la lista s eordena de z-a.
    db.products.find().limit(2)   
        limta el numero de resultados devueltos.
    db.products.find().count() 
        cuenta los documentos.
    
    -------------------FUNCIONES-------------
    db.products.find().forEach(product => print("Product Name: " + product.name))  

        muetsra todos los productos con un foreach, se usa print por que el interprete de mongo reconoce esta palabra reservada y no console.log.

    db.products.find().forEach(product => print("Product Name: " + product.price))
        mustra el precio de cada documento, los campos que no tiene ese atributo se los devuelve como undefined.
    ------------UPDATE-------------------
    db.products.update({"name": "keyboard"},{"price":99.99})
        Busca el dumento con name keyboard y añade un atributo llamado price al documento.
        recibimos 1 y 1 como respuetas significa que si fue encontrado y modificado.
        { "_id" : ObjectId("5fc720dde5671b3e337db36d"), "price" : 99.99 }

        pero se elimina los datos previos como el name y tags, el update reemplaza el documento que encuentra por el json que enviamos.

    db.products.update({"price": 99.99},{"name":"keyboard","price": 99.9})

        actualizamos el mismo documento pero con el informaciond e name y price. pero si no queremos reemplazar todo el dumento.

    db.products.update({"name": "laptop"},{$set:{"description":"lg gram laptop"}})

         con el set podemos modificar el contenido del documento sin afectar a los demas atributos.
        
    db.products.update({"name": "desktop"},{$set:{"description":"Gaming desktop"}},{upsert:true}) 
        queremos insertar un docmetno pero la onformacion con desktop no existe entonces, agregando al final el upsert,  si no encuentra el documento se crea uno nuevo con la informacion que enviamos con el set y el dato con el que hicimos la comparacion(desktop).
    db.products.update({"name": "keyboard"},{$inc:{"price":0.1}})
        Para incrementar usmos el $inc que perimite sumar al atributo que enviemos.
    
    ---------------------remonbrar propiedades u atributos--------------
    db.products.update({"name": "laptop"},{$rename:{"name":"nombre"}})
        renombra la propiedad, la encuentra y la actualiza a nombre, $rename nos permite hacer esta operacion además el json siguiente enviamos el nombre de la propiedad antigua y al lado la nueva.
    ---------------eliminar------------------------------------------------------------
    db.products.remove({"nombre":"keyboard"}) 
        busca el documento con propiedad nombre y el dato keyboard, si existe elimina el documento.
    db.products.remove({}) 
        Elimina todos los documentos.
    -----------------compass------------------------
    es la nterfaz grafica de todo esto
    ademas tenemos mongodbatlas que nos permite manejar nustra bd en un cluster y tenerlo listo para produccion.
*/