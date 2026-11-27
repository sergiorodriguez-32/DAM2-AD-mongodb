// ============================================================
// DAM2 - ACCESO A DATOS
// PRÁCTICA MONGODB - TIENDA ONLINE
// ============================================================
// Nombre: Sergio Rodríguez López
// Fecha:26/11/2026
//
// Escribe debajo de cada enunciado la consulta correspondiente.
// Utiliza la chuleta de MongoDB como referencia.
// ============================================================

// BLOQUE 1. EXPLORACIÓN DE LA BASE DE DATOS
// ============================================================

// 1. Muestra todas las bases de datos disponibles.

//show dbs

// 2. Selecciona la base de datos `tienda`.

//use tienda

// 3. Lista todas sus colecciones.

//show collections

// 4. Averigua cuántos documentos tiene cada colección.

//db.productos.countDocuments()
//db.clientes.countDocuments()
//db.pedidos.countDocuments()

// 5. Muestra todos los productos registrados.
//db.productos.find()

// 6. Obtén un único producto.
//db.productos.findOne()

// 7. Descubre qué categorías de productos existen.
//db.productos.distinct('categoriaId')

// 8. Muestra únicamente el nombre y el precio de todos los
// productos, sin mostrar su _id.
//db.productos.find({}, { _id: 0, nombre: 1, precio: 1 })

// BLOQUE 2. CONSULTAS Y FILTROS
// ============================================================

// 9. Busca todos los productos de informática.

//db.productos.find({ categoriaId: 'CAT01' })

// 10. Encuentra los productos cuyo precio sea superior a 100 €.

//db.productos.find({ precio: { $gt: 100 } })

// 11. Busca los productos que cuestan entre 50 € y 500 €,
// ambos incluidos.

//db.productos.find({ precio: { $gte: 50, $lte: 500 } })

// 12. Localiza los productos que no tienen stock.

//db.productos.find({stock:{$gte:0}})

// 13. Encuentra los productos con stock superior a 10 unidades
// y precio inferior a 100 €.

//db.productos.find({$and: [{stock:{$gt:10}},{precio:{$lt:100}}]})


// 14. Busca productos pertenecientes a las categorías
// `audio` o `movil`.

//db.productos.find({ categoriaId: { $in: ['CAT02', 'CAT03'] } })

// 15. Encuentra los productos que no pertenecen
// a la categoría `informatica`.

//db.productos.find({ categoriaId: { $nin: ['CAT01'] } })

// 16. Busca productos que cuesten menos de 30 € o tengan
// más de 50 unidades en stock.

//db.productos.find({ $or: [ { precio: { $lt: 30 } }, { stock: { $gt: 50 } } ] })

// 17. Encuentra productos cuyo precio no sea superior a 100 €.

//db.productos.find({ precio: { $not: { $gt: 100 } } })

// 18. Localiza todos los productos cuyo nombre contenga
// la palabra `móvil`, sin distinguir mayúsculas de minúsculas.

//db.productos.find({ nombre: { $regex: 'móvil', $options: 'i' } })

// BLOQUE 3. CAMPOS, TIPOS Y ORDENACIÓN
// ============================================================

// 19. Encuentra los productos que tienen el campo `descuento`.

//db.productos.find({ descuento: { $exists: true } })

// 20. Busca los productos que no tienen descuento definido.

//db.productos.find({ descuento: { $exists: false } })

// 21. Comprueba qué productos tienen el precio almacenado
// como número.

//db.productos.find({ precio: { $type: 'number' } })

// 22. Encuentra los productos cuyo precio de venta
// sea superior a su coste.

//db.productos.find({ $expr: { $gt: ['$precio', '$coste'] } })

// 23. Ordena los productos del más barato al más caro.

//db.productos.find().sort({precio:-1})

// 24. Obtén los tres productos más caros.

//db.productos.find().sort({ precio: -1 }).limit(3)

// 25. Muestra los tres productos más baratos que tengan stock.

//db.productos.find({stock: {$gt:0}}).sort({ precio: 1 }).limit(3)

// 26. Implementa una paginación que muestre tres productos
// por página, ordenados por _id.
// Obtén las páginas 1, 2 y 3.

//// Página 1
//db.productos.find().sort({ _id: 1 }).limit(3)

// Página 2
//db.productos.find().sort({ _id: 1 }).skip(3).limit(3)

// Página 3
//db.productos.find().sort({ _id: 1 }).skip(6).limit(3)

// BLOQUE 4. INSERCIÓN Y ACTUALIZACIÓN
// ============================================================
// IMPORTANTE: trabaja sobre una colección de prácticas.

// 27. Inserta un producto nuevo con código, nombre, categoría,
// precio, coste, stock y etiquetas.

//db.productos_practica.insertOne({ codigo: 'P000', nombre: 'Prueba', categoriaId: 'CAT01', precio: 50, coste: 30, stock: 1, etiquetas: ['usado'] })

// 28. Inserta cinco productos adicionales en una única operación.

//db.productos_practica.insertMany([
 // { codigo: 'P101', nombre: 'Webcam', categoriaId: 'CAT01', precio: 40, coste: 25, stock: 10, etiquetas: ['oficina'] },
  //{ codigo: 'P102', nombre: 'Micrófono', categoriaId: 'CAT02', precio: 55, coste: 35, stock: 7, etiquetas: ['audio', 'gaming'] },
  //{ codigo: 'P103', nombre: 'Cargador móvil', categoriaId: 'CAT03', precio: 15, coste: 6, stock: 60, etiquetas: ['accesorio'] },
  //{ codigo: 'P104', nombre: 'Alfombrilla', categoriaId: 'CAT01', precio: 10, coste: 4, stock: 0, etiquetas: ['gaming'] },
  //{ codigo: 'P105', nombre: 'Soporte monitor', categoriaId: 'CAT01', precio: 30, coste: 18, stock: 0, etiquetas: ['oficina'] }
//])

// 29. Cambia el precio de uno de los productos insertados.

//db.productos.updateOne({codigo:'P000'},{$set: {precio: 28}})

// 30. Incrementa en 20 unidades su stock.

//db.productos.updateOne({codigo:'P000'},{$inc:{stock:+20}})

// 31. Reduce el precio de todos los productos de una categoría
// multiplicándolo por 0.9.

//

// 32. Añade un campo `activo` con valor true
// a todos los productos.

//

// 33. Cambia el nombre del campo `activo` por `disponible`.

//

// 34. Elimina el campo `disponible` de un producto.

//

// 35. Realiza una operación upsert sobre un producto
// con código `P999`.
// Si existe, actualízalo; si no, insértalo.

//

// 36. Sustituye completamente uno de los documentos de prueba,
// conservando su _id.

//

// BLOQUE 5. ELIMINACIÓN
// ============================================================

// 37. Elimina un producto concreto utilizando su código.

// 38. Elimina todos los productos de prueba cuyo stock sea cero.

// 39. Crea una colección temporal, inserta varios documentos
// y vacíala sin eliminar la colección.

// 40. Elimina completamente la colección temporal.

// BLOQUE 6. ARRAYS Y DOCUMENTOS ANIDADOS
// ============================================================

// 41. Busca todos los productos que tengan la etiqueta `gaming`.

// 42. Encuentra productos que tengan simultáneamente
// las etiquetas `gaming` y `oficina`.

// 43. Busca productos que tengan exactamente dos etiquetas.

// 44. Añade una etiqueta `destacado` a un producto.

// 45. Intenta añadir de nuevo `destacado`, evitando duplicados.

// 46. Elimina la etiqueta `destacado`.

// 47. Añade varias etiquetas en una única operación.

// 48. Añade al producto P001 dos valoraciones,
// cada una con usuario y nota.

// 49. Busca productos con alguna valoración
// de nota igual o superior a 4.

// 50. Busca productos que tengan una valoración realizada
// por `ana` con nota superior o igual a 4.
// Ambas condiciones deben cumplirse en la misma valoración.

// 51. Modifica la nota de una valoración concreta
// dentro del array.

// 52. Incrementa en una unidad las notas de todas
// las valoraciones de un producto de prueba,
// sin superar el valor máximo permitido.

// BLOQUE 7. AGREGACIONES
// ============================================================

// 53. Calcula el número de productos, el precio medio
// y el stock total de cada categoría.

// 54. Obtén el precio máximo y mínimo de cada categoría.

// 55. Calcula el margen de beneficio de cada producto
// (precio - coste).

// 56. Calcula el valor total del inventario por categoría
// (precio × stock).

// 57. Ordena las categorías según su precio medio,
// de mayor a menor.

// 58. Obtén una lista de los nombres de los productos
// agrupados por categoría.

// 59. Descubre qué etiquetas son las más utilizadas.

// 60. Genera un informe que incluya, en una única consulta:
// - El número total de productos.
// - Las estadísticas de productos por categoría.
// - La cantidad de productos en los intervalos de precio:
//   0-50 €, 50-200 € y 200 € o más.

// BLOQUE 8. RELACIONES ENTRE COLECCIONES
// ============================================================

// 61. Muestra cada pedido junto con los datos
// del cliente que lo realizó.

// 62. Obtén todos los pedidos de Ana,
// mostrando también la información del cliente.

// 63. Muestra cada línea de pedido junto con:
// - El nombre del producto.
// - Su precio.
// - La cantidad solicitada.
// - El importe total de esa línea (precio × cantidad).

// 64. Obtén los cinco clientes que más dinero han gastado
// en pedidos no cancelados, mostrando su nombre
// y el importe total gastado.

// BLOQUE 9. ÍNDICES Y RENDIMIENTO
// ============================================================

// 65. Consulta los índices existentes en `productos`.
// Ejecuta una búsqueda por categoría y examina
// su plan de ejecución con explain("executionStats").

// 66. Crea un índice compuesto sobre `categoria` y `precio`.
// Ejecuta una consulta que filtre por categoría
// y ordene por precio.
// Compara el plan de ejecución antes y después
// de crear el índice.

// 67. Crea un índice único sobre `codigo` e intenta
// insertar un producto con un código duplicado.
// Explica qué ocurre.

// BLOQUE 10. VALIDACIÓN DE DOCUMENTOS
// ============================================================

// 68. Crea una colección `usuarios` con estas reglas:
// - nombre: obligatorio y de tipo texto.
// - email: obligatorio y de tipo texto.
// - edad: número entre 0 y 120.
// - rol: únicamente `alumno` o `profesor`.

// 69. Comprueba las reglas de validación:
// - Intenta insertar un usuario sin email.
// - Intenta insertar un usuario con edad fuera del intervalo.
// - Intenta insertar un usuario con un rol no permitido.
// - Inserta un usuario válido.
// - Comprueba qué operaciones funcionan y cuáles fallan.

// 70. Modifica la validación mediante collMod para añadir
// el campo obligatorio `activo` de tipo booleano.
// Comprueba que la nueva restricción funciona.

// ============================================================
// FIN DE LA PRÁCTICA - 70 EJERCICIOS
// ============================================================
