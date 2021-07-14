import styled from "styled-components";
import { ReactBingmaps } from "react-bingmaps";
import { Point } from "../../shared/types/types";

type Props = {
  lat?: number;
  lng?: number;
  regularPolygons?: Point[];
};

const MapContainer = styled.div`
  display: flex;
  border: 1px solid black;
  height: 500px;
  width: 500px;
  padding: 10px;
`;

const Map = ({
  lat = 32.109333,
  lng = 34.855499,
  regularPolygons = [],
}: Props) => {
  //default coords of Tel Aviv

  const locationSequence = regularPolygons.length
    ? regularPolygons.map((point) => [point.lat, point.lng])
    : [];

  return (
    <MapContainer>
      <ReactBingmaps
        id="myMap"
        bingmapKey={process.env.REACT_APP_BING_MAP_API_KEY}
        center={[lat, lng]}
        zoom={6}
        regularPolygons={regularPolygons.map((point) => {
          return {
            center: [point.lat, point.lng],
            radius: 5,
            points: 30,
            option: { fillColor: "rgba(0,0,0,0.5)", strokeThickness: 3 },
          };
        })}
        polyline={{
          location: locationSequence,
          option: {
            strokeColor: "blue",
            strokeThickness: 6,
          },
        }}
      />
    </MapContainer>
  );
};

export default Map;
