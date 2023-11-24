
/*
login 
<project title="Conexion">
        <service name="MongoDB Atlas" ty
*/


function mostrarMensaje() {
Swal.fire({
        title: "Do you want to save the changes?",
        showCancelButton: true,
        confirmButtonText: "Save",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      })};




document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form[role="search"]').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario

        const searchText = document.querySelector('input[type="search"]').value.toLowerCase();
        const recipes = document.querySelectorAll('.cuadro-receta');

        recipes.forEach(function(recipe) {
            const recipeName = recipe.querySelector('h1').textContent.toLowerCase();
            const recipeId = recipe.getAttribute('id');

            if (recipeName.includes(searchText)) {
                window.location.href = `#${recipeId}`;
            }
        });
    });
});

