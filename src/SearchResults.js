import useSWR from "swr";
const { Client } = require('podcast-api');

const client = Client({ apiKey: '92ad0d27f80f4f4d9b38c4d75adcad25' });
const fetcher = (this_url) => fetch(this_url).then((res) => res.json());


export function btn_handler() {
  console.log("button clicked!")
}

export default function SearchResults({ url }) {
  const { data, error } = useSWR(
    url,
    fetcher
  );
  console.log("loading app instance")
  if (error) return "An error has occurred.";
  return ( null );
}

var search_results = [];

export function podcast_search() {
  client.search({
    q: 'star wars',
    sort_by_date: 0,
    type: 'episode',
    offset: 0,
    len_min: 10,
    len_max: 30,
    genre_ids: '68,82',
    published_before: 1580172454000,
    published_after: 0,
    only_in: 'title,description',
    language: 'English',
    safe_mode: 0,
  }).then((response) => {
    refresh_search_results(response)
  }).catch((error) => {
    console.log(error)
  });
}

export function refresh_search_results (response) {
  search_results = response.data["results"];
  var dom_search_results = document.querySelector("#list_of_search_results")
  var dom_result_template = document.querySelector("#search-result-template")
  var nb_search_results = document.querySelectorAll("#search_result_card")
  console.log(nb_search_results.length)
  search_results.map(search_result => {
    console.log(search_result['title_original'])
    var new_dom_result = dom_result_template.cloneNode(true);
    new_dom_result.id = "id" + search_result["itunes_id"];
    new_dom_result.hidden = false;
    new_dom_result.innerText = search_result['title_original']
    new_dom_result.classList.add("visible_search_result")
    dom_search_results.appendChild(new_dom_result);
   })
}

export function clear_search_results () {
  var stale_searches = document.querySelectorAll(".visible_search_result")
  stale_searches.forEach((this_node) => { this_node.remove() })
}
