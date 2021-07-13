import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import { Screen } from "../../shared/components";
import MainButton from "../../shared/components/MainButton";
import { Point } from "../../shared/types/types";
import Map from "./Map";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 46px;
`;

const Title = styled.h1`
  display: flex;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 8px;
`;

const MapContainer = styled.div`
  display: flex;
  margin-left: 20px;
`;

const HomeScreen = () => {
  const { t } = useTranslation("homeScreen");
  const [latInput, setLatInput] = useState("");
  const [lngInput, setLngInput] = useState("");
  const [bingMap, setBingMap] = useState<Point>();

  const onLatChange = useCallback((inputText: string) => {
    setLatInput(inputText);
  }, []);

  const onLngChange = useCallback((inputText: string) => {
    setLngInput(inputText);
  }, []);

  const onSubmit = useCallback(() => {
    setBingMap({
      lat: Number(latInput),
      lng: Number(lngInput),
    });
  }, [latInput, lngInput]);

  return (
    <Screen>
      <ContentContainer>
        <FormContainer>
          <Title>{t("coordinatesForm")}</Title>
          <InputContainer>
            <Input
              type="number"
              placeholder={t("latitude")}
              value={latInput}
              onChange={(e) => onLatChange(e.target.value)}
            />
            <Input
              type="number"
              placeholder={t("longitude")}
              value={lngInput}
              onChange={(e) => onLngChange(e.target.value)}
            />
          </InputContainer>
          <MainButton
            disabled={!latInput || !lngInput}
            onClick={onSubmit}
            title={t("submitCoords")}
          />
        </FormContainer>
        {bingMap ? (
          <MapContainer>
            <Map lat={bingMap.lat} lng={bingMap.lng} />
          </MapContainer>
        ) : (
          <MapContainer>
            <Map />
          </MapContainer>
        )}
      </ContentContainer>
    </Screen>
  );
};

export default HomeScreen;
