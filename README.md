# TAREA 1 M2

Se usa el estado 'newNote' para almacenar el contenido de la nueva nota que el usuario esta ingresando al formulario y 'notes' para almacenar la lista de notas recuperadas del servidor. 'setNewNote' y 'setNotes' son funciones de 'useState' que se usan para actualizar estos estados respectivamente. 

'useEffect' se usa para llamar a la API cuando el componente 'App' se monta por primera vez. Se llama a 'axios.get' dentro de este para obtener la lista de notas del servidor y actualizar el estado 'notes' con los datos que s eobtuvieron. 