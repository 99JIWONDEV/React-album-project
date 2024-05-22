import axios from "axios";
import { selector } from "recoil";
import { searchState } from "../atoms/searchState";
import { pageState } from "../atoms/pageState";

const API_URL = 'https://api.unsplash.com/photos'
const API_KEY = 'Vc4dm_C9Gv7NxHVnkLiBMSDUZ3K3YW4kSk3PhF6TWJE'
const PER_PAGE = 30

export const imageData = selector({
  key: "imageData",
  get: async ({get}) => {
    const searchValue = get(searchState)
    const pageValue = get(pageState)

    // API 호출
    try{
      const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
      console.log(res)

      return res
    }catch(error){
      console.error(error)
    }
  }

});