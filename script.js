console.log('====================================');
console.log("Connected");
console.log('====================================');


function showCategory(category) {
    
    const contents = document.querySelectorAll('.category-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    
    const selectedContent = document.getElementById(category);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

    
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    
    const activeButton = document.querySelector(`.tab-button[onclick="showCategory('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    showCategory('men');
});
