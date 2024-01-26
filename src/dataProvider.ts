import { DataProvider } from 'react-admin';


export const dataProvider: DataProvider = {
  async create(resource, params) {

    const arrayInputValue = params.data.array_input;
    console.log("ARRAY INPUT VALUE", arrayInputValue);
    if (Array.isArray(arrayInputValue)) {
      alert("Array Input returned an Array");
    } else if (arrayInputValue === undefined) {
      alert("Array Input returned undefined");
    } else {
      alert("Array Input returned something that's neither an array or undefined - check console");
    }

    return { data: { id: 1} }
  },
  async getList(resource, params) {
    return { data: [{ id: 0}], total: 1  }
  },
  async getOne(resource, params) {
    return Promise.reject()
  },
  async getMany(resource, params) {
    return Promise.reject()
  },
  async getManyReference(resource, params) {
    return Promise.reject()
  },
  async update(resource, params) {
    return Promise.reject()
  },
  async updateMany(resource, params) {
    return Promise.reject()
  },
  async delete(resource, params) {
    return Promise.reject()
  },
  async deleteMany(resource, params) {
    return Promise.reject()
  },
}
