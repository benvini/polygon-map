import styled from "styled-components";
import { ReactBingmaps } from "react-bingmaps";

type Props = {
    lat?: number;
    lng?: number;
};

const MapContainer = styled.div`
  display: flex;
  border: 1px solid black;
  height: 500px;
  width: 500px;
  padding: 10px;
`;

const Map = ({lat = 32.109333, lng = 34.855499}: Props) => { //default coords of Tel Aviv
    return (
        <MapContainer>
            <ReactBingmaps 
              id="myMap"
              bingmapKey={process.env.REACT_APP_BING_MAP_API_KEY}
              center={[lat, lng]}
              zoom={4}
             />
        </MapContainer>
    )
}

export default Map;