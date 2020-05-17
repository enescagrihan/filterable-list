const searchBar = document.getElementById('text-input');


searchBar.addEventListener('keyup', () => {
    const searchValue = searchBar.value.toUpperCase();
    
    const td = document.querySelectorAll('.collection-item td');

    td.forEach(item => {
        if(item.innerHTML.toUpperCase().includes(searchValue)) {
            item.style.display = '';  
        }
        else {
            item.style.display = 'none';
        }
    })
})