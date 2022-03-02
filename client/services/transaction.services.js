import axios from "../utils/axios";

class TransactionService {
  async GetAll() {
    const res = await axios.get(`/get-all`);
    return res.data;
  }
}

const transactionService = new TransactionService();

export default transactionService;
