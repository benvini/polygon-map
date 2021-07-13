import axios from "axios";
import { FETCH_LOCATION_URL } from "../../bin/config";

// export const fetchLocationByCoords = async (lat: number, lng: number) => {
//     if (!lat || !lng) {
//         return null;
//     }
//     const apiKey = process.env.REACT_APP_BING_MAP_API_KEY;
//     const response = await axios.get(`${FETCH_LOCATION_URL}/${lat},${lng}&key=${apiKey}`);
//     return response.data;
// };