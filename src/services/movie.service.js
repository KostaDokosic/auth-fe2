import { CONFIG } from "../utils/static";
import HttpService from "./htttp.service";

export default class MovieService {
  static async getAll(take = CONFIG.moviesPerPage, skip = 0, search = "") {
    return await HttpService.request({
      url: "/movies",
      method: "GET",
      params: { take, skip, search },
    });
  }
  static async get(id) {
    return await HttpService.request({
      url: `/movies/${id}`,
      method: "GET",
    });
  }
  static async create(data) {
    return await HttpService.request({
      url: "/movies",
      method: "POST",
      data,
    });
  }
  static async update(id, data) {
    return await HttpService.request({
      url: `/movies/${id}`,
      method: "PUT",
      data,
    });
  }
}
