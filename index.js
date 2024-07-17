document.addEventListener('DOMContentLoaded', () => {
    const allPagesCheckbox = document.querySelector('.all-pages-checkbox');
    const pageCheckboxes = document.querySelectorAll('.page-item .custom-checkbox');

    allPagesCheckbox.addEventListener('change', () => {
        pageCheckboxes.forEach(checkbox => {
            checkbox.checked = allPagesCheckbox.checked;
            console.log(`Checkbox state changed: ${checkbox.checked}`);
        });
    });

    pageCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            console.log(`Checkbox state changed: ${checkbox.checked}`);
        });
    });

    const doneButtons = document.querySelectorAll('.done-button');
    
    doneButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Done button clicked');
        });
    });
});