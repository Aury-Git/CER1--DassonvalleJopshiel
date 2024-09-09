document.addEventListener('DOMContentLoaded', function () {
    const sections = {
        menu: document.getElementById('menu'),
        solicitud: document.getElementById('solicitud'),
        catalogo: document.getElementById('catalogo')
    };

    const buttons = document.querySelectorAll('button[data-section]');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const sectionToShow = button.getAttribute('data-section');
            
            // Ocultar todas las secciones
            Object.values(sections).forEach(section => section.style.display = 'none');
            
            // Mostrar la sección seleccionada
            sections[sectionToShow].style.display = 'block';
        });
    });
});

/* Seccion de Solicitud de Reciclaje  */
document.addEventListener('DOMContentLoaded', function() {
    const items = [
        { id: 'plastico', subitems: ['Botellas', 'Envases', 'Bolsas', 'Tuberías'] },
        { id: 'papel', subitems: ['Hojas', 'Cartón', 'Revistas', 'Sobres'] },
        { id: 'vidrio', subitems: ['Botellas', 'Frascos', 'Vasos', 'Ventanas'] },
        { id: 'metales', subitems: ['Latas', 'Tuberías', 'Herramientas', 'Electrodomésticos'] },
        { id: 'electronicos', subitems: ['Teléfonos', 'Computadoras', 'Televisores', 'Cables'] }
    ];

    items.forEach(item => {
        const parentLi = document.getElementById(item.id);
        const sublistUl = document.getElementById('sublist-' + item.id);

        parentLi.addEventListener('click', function() {
            // Limpia la sublista existente
            sublistUl.innerHTML = '';

            // Alterna la visibilidad de la sublista
            if (sublistUl.style.display === 'none' || sublistUl.style.display === '') {
                item.subitems.forEach(subitem => {
                    const li = document.createElement('li');
                    li.textContent = subitem;
                    sublistUl.appendChild(li);
                });
                sublistUl.style.display = 'block';
            } else {
                sublistUl.style.display = 'none';
            }
        });
    });
});
