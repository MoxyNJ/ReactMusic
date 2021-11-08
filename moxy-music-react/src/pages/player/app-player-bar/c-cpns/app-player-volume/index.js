import React, { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "antd";

import { changePlayerVolumeAction } from "../../../store/actionCreators";

import { PlayerVolumeWrapper } from "./style";

export default memo(function LJPlayerVolume() {
  // redux hooks
  const { volume } = useSelector((state) => ({
    volume: state.getIn(["player", "volume"]),
  }));

  // 进度条
  const [progress, setProgress] = useState(volume);

  const dispatch = useDispatch();

  // react hooks
  // 初始化
  useEffect(() => {
    setProgress(volume * 100);
  }, [volume]);

  // 按下
  const sliderChange = useCallback(
    (value) => {
      dispatch(changePlayerVolumeAction(value / 100));
    },
    [dispatch]
  );

  return (
    <PlayerVolumeWrapper className="sprite_playbar">
      <Slider
        vertical
        className="sprite_playbar"
        value={progress}
        onChange={sliderChange}
      />
    </PlayerVolumeWrapper>
  );
});
