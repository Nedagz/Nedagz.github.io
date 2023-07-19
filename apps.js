
// Smooth scrolling on the navbar links
document.addEventListener('scroll', function() {
    
    if (window.scrollY > 200) {
        document.getElementById('myHeader').style.display = 'block';
    }
    else {
        document.getElementById('myHeader').style.display = 'none';
    }
});






//Tab gallery
const Gallery = [
    {img: 'assets/portfolio-1.jpg', category: 'Web', link: 'https://github.com/Nedagz/project-descriptions'},
    {img: 'assets/portfolio-2.jpg', category: 'Web', link: 'https://github.com/Nedagz/project-web-1'},
    {img: 'assets/portfolio-3.jpg', category: 'Web', link: 'https://github.com/Nedagz/project-web-3'},
    {img: 'assets/portfolio-4.jpg', category: 'Web', link: 'https://github.com/Nedagz/project-web-4'},
    {img: 'assets/portfolio-5.jpg', category: 'Web', link: 'https://github.com/Nedagz/project-web-5'},
    {img: 'assets/portfolio-6.jpg', category: 'Js', link: 'https://github.com/Nedagz/project-web-2'}
];

const addGalleryList = (itemList = []) => {
    document.getElementById('parent-image').innerHTML = itemList.map((items) => `<div class="images-wrapper">
    <img src="${items.img}"/>
    <div class="overlay">
      <a href="${items.link}"><ion-icon name="add-outline"></ion-icon></a>
    </div>
  </div>`).join(' ');
}

const setActiveClass = (button) => {
    if (button) {
        document.querySelectorAll('.btn-category').forEach((b) => {
            b.classList.remove('actives-btn')
        })
    
        button.classList.add('actives-btn')
    }
}


const addCategoryButtons = () => {
    let categoryList = ['All'];
    Gallery.forEach((item) => {
        if (item && item.category && !categoryList.includes(item.category)) {
            categoryList.push(item.category);
        }
    })
    const buttons = categoryList.map((cat) => `<button class="button btn-category ${cat === 'all' ? 'actives-btn' : '' }" category-id = "${cat}">${cat}</button>`)
    console.log(categoryList, buttons);

    if(buttons.length > 0) {
        document.getElementById('gallery-categories').innerHTML = buttons.join(' ')
    }

    document.querySelectorAll('.btn-category').forEach((item) => {
        const categoryType = item.getAttribute('category-id');
        

        item.addEventListener('click', function() {

            setActiveClass(item)
            item.classList.add('actives-btn')
            if (categoryType === 'All') {
                addGalleryList(Gallery)
                return
            }
            const filteredList = Gallery.filter((item) => item.category === categoryType)
            addGalleryList(filteredList)
            
        })
    })

   
}
document.addEventListener('DOMContentLoaded', function() {
    addCategoryButtons();
    addGalleryList(Gallery);
})




// Navigation Bar
function myFunction() {
    let linkBar = document.getElementById('myLinks');
    if (linkBar.style.display === 'block') {
        linkBar.style.display = 'none';
    }else {
        linkBar.style.display = 'block';
    }
}

