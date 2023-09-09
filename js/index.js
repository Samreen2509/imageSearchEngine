const accessKey ="2rPupZ79M44hsxPU-E1GTHz-7PX3-qY9bR7KuaM-z5s";




const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showmorebtn = document.getElementById("btnsm");

let keyword = "";
let page = 2;

async function searchImages(){
    keyword = searchBox.value;

    const url =`https://api.unsplash.com/search/photos?page=${page}&query={keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    
    if(page===1){
        searchResult.innerHTML = "";
    }
    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    showmorebtn.style.display="block";
}


searchForm.addEventListener("submit",(e) =>{
e.preventDefault();
page=2;
searchImages();
});

showmorebtn.addEventListener("click",()=>{
    page++;
    searchImages();
});