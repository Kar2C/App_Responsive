document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('typescript-button').addEventListener('click', function() {
        window.location.href = 'typescript.html'; // Ruta a TypeScript
    });

    document.getElementById('angular-button').addEventListener('click', function() {
        window.location.href = 'angular.html'; // Ruta a Angular
    });

    document.getElementById('ionic-button').addEventListener('click', function() {
        window.location.href = 'ionic.html'; // Ruta a Ionic
    });

    document.getElementById('home-button').addEventListener('click', function() {
        window.location.href = 'index.html'; // Ruta a index
    });
});