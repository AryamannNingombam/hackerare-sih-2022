import axios from "axios";

class AddressService {
  GetAllAddressesForUser() {
    return axios.get(`/get-all`);
  }

  GetDefaultAddressForUser() {
    return axios.get(`/get-default`);
  }

  AddAddress(address) {
    return axios.post(`/add`, address);
  }

  EditAddress(address) {
    return axios.put(`/edit`, address);
  }

  DeleteAddress(addressId) {
    return axios.delete(`/delete/${addressId}`);
  }

  MakeAddressDefault(addressId) {
    return axios.post(`/make-default`, addressId);
  }

  GetAddressDetails(addressId) {
    return axios.get(`/details/${addressId}`);
  }
}

const addressService = new AddressService();

export default addressService;
