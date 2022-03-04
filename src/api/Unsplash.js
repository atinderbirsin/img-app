import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Yg4IRBe2KnIpYasyMR0-EsEKVlc_afo6M0S75HaqmxA",
  },
});
