export const RegionSelect = ({
  regionFilter,
  sidoOpt,
  sigunguOpt,
  emdOpt,
  riOpt,
  handleRegionChange,
}) => {
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
