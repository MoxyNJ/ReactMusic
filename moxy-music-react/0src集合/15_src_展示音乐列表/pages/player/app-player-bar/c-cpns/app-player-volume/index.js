import React, { memo, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Slider } from "antd";

import { INIT_VOLUME } from "@/common/contants";
import { changePlayerVolumeAction } from "../../../store/actionCreators";

import { PlayerVolumeWrapper } from "./style";

export default memo(function LJPlayerVolume() {
  // 进度条
  const [progress, setProgress] = useState(0);

  const dispatch = useDispatch();

  // 对音量的初始化
  useEffect(() => {
    setProgress(INIT_VOLUME);
  }, [dispatch]);

  // 按下
  const sliderChange = useCallback(
    (value) => {
      setProgress(value);
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
