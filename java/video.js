const loadCatefories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log('Error:', err))
}

const loadCateforiesVideos =(id)=>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data =>  displayVideos(data.category))
}


const displayCategories = (display) => {
    const categoryBtnConatiner = document.getElementById('category-btn-conatiner');
    display.forEach(item => {
        const Btnconatiner = document.createElement('div');
        Btnconatiner.innerHTML =`
            <button onclick="loadCateforiesVideos(${item.category_id})" class="btn">
            ${item.category}
            </button>
        `
        categoryBtnConatiner.append(Btnconatiner)
    })
}
    /* get time */
    function getTime(time){
        let hours = parseInt(time / 3600)
        let remainSec = time % 3600;
        let minutes = parseInt(remainSec / 60);
        let remainSec2 = remainSec % 60;
        return`${hours} h ${minutes}min ${remainSec2}sec`
    }
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.log("Error:", err))
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video-container')
    videoContainer.innerHTML = ''
    videos.forEach(videos => {
        console.log(videos);
        const div = document.createElement('div')
        div.classList = 'card card-compact'
        div.innerHTML = `
        <figure class="h-[200px] relative">
    <img
      src=${videos.thumbnail}
      class="w-full h-full object-cover"
      alt="Shoes" />
      ${
        videos.others.posted_date?.length === 0 ? '' : `<span class ="absolute bottom-2 right-3 bg-black text-white text-xs rounded-md p-1">
        ${getTime(videos.others.posted_date)}
      </span>`
      }
      
  </figure>
    <div class="px-0 py-2 flex gap-2">
    <div>
        <img src=${videos.authors[0].profile_picture} class="w-10 h-10 rounded-full object-cover">
    </div>
    <div>
        <h2 class="font-bold">${videos.title}</h2>
        <div class="flex items-center gap-2">
            <div>
                <p>${videos.authors[0].profile_name}</p>
            </div>
            <div>
                ${
                    videos.authors[0]. verified === true ? '<img class="w-5 h-5 rounded-full object-cover" src=https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png>' : ''
                }
            </div>
        </div>
    </div>
    </div>
    `
    videoContainer.append(div)
    })
}

loadCatefories();
loadVideos();