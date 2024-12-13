import axios from "axios";

const SERVER = "http://localhost:8111";

const CommonAPI = {
  GetSido: async () => {
    return await axios.get(SERVER + `/common/sidoChoice`);
  },
  GetRegionFilter: async (areaCode) => {
    return await axios.get(SERVER + `/common/regionFilter/${areaCode}`);
  },
};

export default CommonAPI;
