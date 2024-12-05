import axios from "axios";

const SERVER = "http://localhost:8111";

const UserProfileAPI = {
  reviewList: async (email) => {
    return await axios.get(SERVER + `/userProfile/reviews/${email}`);
  }
}

export default UserProfileAPI;