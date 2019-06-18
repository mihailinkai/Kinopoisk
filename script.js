const searchForm = document.querySelector('#search-form');

function apiSearch(event){
    event.preventDefault();
  const searchText = document.querySelector('.form-control').value,
  server = 'https://www.themoviedb.org/'; // можно считать что api это БД
  console.log(requestApi(server));
}

searchForm.addEventListener('submit', apiSearch);
function requestApi(url){
return url;


}
