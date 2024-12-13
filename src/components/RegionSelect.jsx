import { useEffect } from "react";
import CommonAPI from "../api/CommonAPI";

export const RegionSelect = ({
  regionFilter,
  sidoOpt,
  sigunguOpt,
  emdOpt,
  riOpt,
  setSearchParams,
  setRegionFilter,
  setSigunguOpt,
  setEmdOpt,
  setRiOpt,
}) => {
  useEffect(() => {
    const fetchRegionData = async () => {
      try {
        let responseRegion;
        if (regionFilter.emd) {
          responseRegion = await CommonAPI.GetRegionFilter(regionFilter.emd);
          setRiOpt(responseRegion.data);
        } else if (regionFilter.sigungu) {
          responseRegion = await CommonAPI.GetRegionFilter(
            regionFilter.sigungu
          );
          setEmdOpt(responseRegion.data);
        } else if (regionFilter.sido) {
          responseRegion = await CommonAPI.GetRegionFilter(regionFilter.sido);
          setSigunguOpt(responseRegion.data);
        } else {
          return;
        }
      } catch (error) {
        console.error("Error fetching region data: ", error);
      }
    };
    fetchRegionData();

    const newParams = new URLSearchParams();
    if (regionFilter.sido) newParams.set("sido", regionFilter.sidoName);
    if (regionFilter.sigungu)
      newParams.set("sigungu", regionFilter.sigunguName);
    if (regionFilter.emd) newParams.set("emd", regionFilter.emdName);
    if (regionFilter.ri) newParams.set("ri", regionFilter.riName);
    setSearchParams(newParams);
  }, [regionFilter]);

  useEffect(() => {
    if (regionFilter.sido) {
      // 시도가 변경되면 시군구, 읍면동, 리를 초기화합니다.
      setSigunguOpt([]);
      setEmdOpt([]);
      setRiOpt([]);
      setRegionFilter((prevState) => ({
        ...prevState,
        sigungu: null,
        emd: null,
        ri: null,
        sigunguName: null,
        emdName: null,
        riName: null,
      }));
    }
    const fetchRegionData = async () => {
      try {
        let responseRegion;
        if (regionFilter.emd) {
          responseRegion = await CommonAPI.GetRegionFilter(regionFilter.emd);
          setRiOpt(responseRegion.data);
        } else if (regionFilter.sigungu) {
          responseRegion = await CommonAPI.GetRegionFilter(
            regionFilter.sigungu
          );
          setEmdOpt(responseRegion.data);
        } else if (regionFilter.sido) {
          responseRegion = await CommonAPI.GetRegionFilter(regionFilter.sido);
          setSigunguOpt(responseRegion.data);
        } else {
          return;
        }
      } catch (error) {
        console.error("Error fetching region data: ", error);
      }
    };
    fetchRegionData();

    const newParams = new URLSearchParams();
    if (regionFilter.sido) newParams.set("sido", regionFilter.sidoName);
    if (regionFilter.sigungu)
      newParams.set("sigungu", regionFilter.sigunguName);
    if (regionFilter.emd) newParams.set("emd", regionFilter.emdName);
    if (regionFilter.ri) newParams.set("ri", regionFilter.riName);
    setSearchParams(newParams);
  }, [regionFilter.sido]); // `regionFilter.sido` 변경 시에만 실행됩니다.

  useEffect(() => {
    if (regionFilter.sido) {
      // 시도가 변경되면 시군구, 읍면동, 리를 초기화합니다.
      setEmdOpt([]);
      setRiOpt([]);
      setRegionFilter((prevState) => ({
        ...prevState,
        emd: null,
        ri: null,
        emdName: null,
        riName: null,
      }));
    }
    const fetchRegionData = async () => {
      try {
        let responseRegion;
        if (regionFilter.emd) {
          responseRegion = await CommonAPI.GetRegionFilter(regionFilter.emd);
          setRiOpt(responseRegion.data);
        } else if (regionFilter.sigungu) {
          responseRegion = await CommonAPI.GetRegionFilter(
            regionFilter.sigungu
          );
          setEmdOpt(responseRegion.data);
        } else {
          return;
        }
      } catch (error) {
        console.error("Error fetching region data: ", error);
      }
    };
    fetchRegionData();
  }, [regionFilter.sido]); // `regionFilter.sido` 변경 시에만 실행됩니다.

  const handleRegionChange = (key) => (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex]; // 선택된 옵션
    const regionNameKey = `${key}Name`; // 예: sido -> sidoName

    setRegionFilter((prevState) => ({
      ...prevState,
      [key]: e.target.value, // 코드 값
      [regionNameKey]: selectedOption.text, // 지역 이름
    }));
  };
  return (
    <>
      <select
        id="select-sido"
        className="select-region"
        value={regionFilter.sido || ""}
        onChange={handleRegionChange("sido")}
      >
        <option value="">시/도 선택</option>
        {sidoOpt &&
          sidoOpt.map((sido, index) => (
            <option key={index} value={sido.regionCode}>
              {sido.regionName}
            </option>
          ))}
      </select>
      {sigunguOpt.length > 0 && (
        <select
          id="select-sigungu"
          className="select-region"
          value={regionFilter.sigungu || ""}
          onChange={handleRegionChange("sigungu")}
        >
          <option value="">시/군/구 선택</option>
          {sigunguOpt &&
            sigunguOpt.map((sigungu, index) => (
              <option key={index} value={sigungu.regionCode}>
                {sigungu.regionName}
              </option>
            ))}
        </select>
      )}
      {emdOpt.length > 0 && (
        <select
          id="select-emd"
          className="select-region"
          value={regionFilter.emd || ""}
          onChange={handleRegionChange("emd")}
        >
          <option value="">읍/면/동 선택</option>
          {emdOpt &&
            emdOpt.map((emd, index) => (
              <option key={index} value={emd.regionCode}>
                {emd.regionName}
              </option>
            ))}
        </select>
      )}
      {riOpt.length > 0 && (
        <select
          id="select-ri"
          className="select-region"
          value={regionFilter.ri || ""}
          onChange={handleRegionChange("ri")}
        >
          <option value="">리 선택</option>
          {riOpt &&
            riOpt.map((ri, index) => (
              <option key={index} value={ri.regionCode}>
                {ri.regionName}
              </option>
            ))}
        </select>
      )}
    </>
  );
};
