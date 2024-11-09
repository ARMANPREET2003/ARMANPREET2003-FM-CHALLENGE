document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll('.nav-item.dropdown');

    dropdownToggles.forEach(function(dropdown) {
        dropdown.addEventListener('show.bs.dropdown', function () {
            const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
            openDropdowns.forEach(function(menu) {
                if (menu !== dropdown.querySelector('.dropdown-menu')) {
                    const dropdownInstance = bootstrap.Dropdown.getInstance(menu.closest('.dropdown'));
                    dropdownInstance.hide();
                }
            });
        });
    });
});
