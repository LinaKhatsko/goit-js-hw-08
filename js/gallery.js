const categoriesList = document.querySelectorAll('#categories .item');
console.log("Number of categories", categoriesList.length);

categoriesList.forEach(item=>{
    const category = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('ul > li').length;
    console.log('Category: ', category);
    console.log('Elements: ', elements);
});
