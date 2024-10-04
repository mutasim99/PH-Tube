const loadCatefories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log('Error:', err))
}

const displayCategories = (display) => {
    const categoryBtnConatiner = document.getElementById('category-btn-conatiner');
    display.forEach(item => {
        const categoryBtn = document.createElement('button');
        categoryBtn.classList = 'btn';
        categoryBtn.innerText = item.category
        categoryBtnConatiner.append(categoryBtn);
    })
}


loadCatefories();