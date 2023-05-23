import api from "../../boot/axios";

// configure this file based on your API structure
const ENDPOINT = "SalesTraceApi/api/";
export default class ProductApi {
  // get product list 'products/'
  getProducts = async () => {
    const response = await api.get("Product/GetProducts").then((res) => {
      console.log(res, "product api");
    });

    return response;
  };
}
