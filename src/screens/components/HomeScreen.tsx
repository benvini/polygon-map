import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { ReactBingmaps } from "react-bingmaps";

import {useTranslation} from "react-i18next";
import { Screen, Typography } from "../../shared/components";
import MainButton from "../../shared/components/MainButton";
// import { fetchLocationByCoords } from "../../shared/utils/api";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 46px;
`;

const Title = styled.h1`
  display: flex;
`;

const MapContainer = styled.div`
  display: flex;
  border: 1px solid black;
	height: 500px;
  width: 500px;
	padding: 10px;
	margin-left: 16px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CenterDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled(MainButton)`
  margin-top: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 8px;
`;

const HomeScreen = () => {
  const {t} = useTranslation('homeScreen');
  const [latInput, setLatInput] = useState('');
  const [lngInput, setLngInput] = useState('');
  const [bingMap, setBingMap] = useState({});
  const [error, setError] = useState(false);

  const onLatChange = useCallback((inputText: string) => {
    setLatInput(inputText);
  }, []);
  const onLngChange = useCallback((inputText: string) => {
    setLngInput(inputText);
  }, []);
  // const onSubmit = useCallback(async () => {
  //   try {
  //     const map = await fetchLocationByCoords(latInput, lngInput);
  //     setBingMap(map);
  //   }
  //   catch(e) {
  //     setError(true);
  //   }
  // }, [latInput, lngInput]);

  const onSubmit = () => {

  }

  if (error) {
    return <Typography>{t('unableFetchData')}</Typography>
  }
  return (
    <Screen>
      <CenterDiv>
        <FormContainer>
           <Title>{t('coordinatesForm')}</Title>
           <InputContainer>
           <Input type="number" placeholder={t('latitude')} value={latInput} onChange={(e) => onLatChange(e.target.value)} />
           <Input type="number" placeholder={t('longitude')} value={lngInput} onChange={(e) => onLngChange(e.target.value)} />
           </InputContainer>
           <StyledButton disabled={!latInput || !lngInput} onClick={onSubmit} title={t('submitCoords')}/>
        </FormContainer>
        {latInput && lngInput ?
        <MapContainer>
<ReactBingmaps 
          id="myMap"
          bingmapKey={process.env.REACT_APP_BING_MAP_API_KEY}
          center={[Number(latInput), Number(lngInput)]}
          zoom={4}
         />
        </MapContainer>
        :
        <MapContainer>
<ReactBingmaps 
          id="TelAvivMap"
          bingmapKey={process.env.REACT_APP_BING_MAP_API_KEY}
          center={[32.109333, 34.855499]}
          zoom={4}
         />
        </MapContainer>
        }
      </CenterDiv>
    </Screen>
  );
};

export default HomeScreen;
