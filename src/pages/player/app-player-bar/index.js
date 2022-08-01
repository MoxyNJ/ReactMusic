import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";
import { Slider, message } from "antd";

import LJPlayerVolume from "./c-cpns/app-player-volume";
import LJPlayerPanel from "./c-cpns/app-player-panel";

import { INIT_VOLUME } from "@/common/contants";
import { getSizeImage, formatDate, getPlayUrl } from "@/utils/format-utils";
import {
  getSongDetailAction,
  changeSequenceAction,
  changeSongPlayerAction,
  changeCurrentLyricIndexAction,
  changePlayerVolumeAction,
} from "../store/actionCreators";

import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";

export default memo(function LJAppPlayBar(props) {
  // props
  const {
    volumnHandle: { showVolumn, setShowVolumn },
    pannelHandle: { showPannel, setShowPannel },
  } = props;

  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // redux hooks：          获取state和dispatch
  const {
    currentSong,
    sequence,
    lyricList,
    currentLyricIndex,
    volume,
    playList,
  } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      sequence: state.getIn(["player", "sequence"]),
      lyricList: state.getIn(["player", "lyricList"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
      volume: state.getIn(["player", "volume"]),
      playList: state.getIn(["player", "playList"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const audioRef = useRef();

  // other hooks：          react的hooks
  // 初始化音量
  useEffect(() => {
    dispatch(changePlayerVolumeAction(INIT_VOLUME));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getSongDetailAction(1858069368));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    // 自动播放
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
  }, [currentSong.id]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  // other function：  组件内部的其他逻辑
  // 判断如果有值，才会去值，否则为 undefined。防止报，且可以一个默认值，这里就没给了。
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const songName = currentSong.name || "未知歌曲";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime * 1000, "mm:ss");

  //handle function
  // 播放逻辑
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // 播放条上的当前时间
  const timeUpdate = (e) => {
    const time = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(time);
      setProgress(((currentTime * 1000) / duration) * 100);
    }

    // 获取当前时间的歌词
    let i = 0;
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i];
      // console.log(Ntime, "@", lyricItem.time, "%");
      if (time * 1000 < lyricItem.time) {
        break;
      }
    }

    // console.log(lyricList[i - 1]);
    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1));
      // 防止 i-1 为 -1， 取不到值而报错
      const content = lyricList[i - 1] && lyricList[i - 1].content;
      message.open({
        key: "lyric",
        content,
        duration: 0,
      });
    }
  };

  // Slider是一个组定义组件，要往里面传递参数的时候，使用useCallback嵌套回调函数的时候，防止频繁重新定义
  // 按下
  const sliderChange = useCallback(
    (value) => {
      const time = ((value / 100) * duration) / 1000;
      setProgress(value);
      setCurrentTime(time);
      setIsChanging(true);
    },
    [duration]
  );
  // 松开
  const sliderAfterChange = useCallback(
    (value) => {
      const time = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      setIsChanging(false);
      if (!isPlaying) playMusic();
    },
    [duration, isPlaying, playMusic]
  );

  // 控制循环单曲随机播放
  const changeSequence = () => {
    const currentSequence = sequence === 2 ? 0 : sequence + 1;
    dispatch(changeSequenceAction(currentSequence));
  };

  // 控制上一首，下一首切换
  const changeMusic = (tag) => {
    dispatch(changeSongPlayerAction(tag));
  };

  // 控制播放完毕后，自动切换下一首播放
  const handleMusicEnded = () => {
    if (sequence === 2) {
      // 单曲循环
      // 直接把播放时间设置为 0
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      // 随机/顺序播放
      dispatch(changeSongPlayerAction(1));
    }
  };

  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_playbar prev"
            onClick={(e) => {
              changeMusic(-1);
            }}
          ></button>
          <button
            className="sprite_playbar play"
            onClick={(e) => playMusic()}
          ></button>
          <button
            className="sprite_playbar next"
            onClick={(e) => {
              changeMusic(1);
            }}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/player">
              <img src={getSizeImage(picUrl, 35)} alt="音乐" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <a href="/todo" className="song-name">
                {songName}
              </a>
              <a href="/todo" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                tipFormatter={null}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="playerbar_pip btn pip"></button>
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button
              className="sprite_playbar btn volume"
              onClick={(e) => setShowVolumn(!showVolumn)}
            ></button>
            <button
              className="sprite_playbar btn loop"
              onClick={(e) => {
                changeSequence();
              }}
            ></button>
            <button
              className="sprite_playbar btn playlist"
              onClick={(e) => setShowPannel(!showPannel)}
            >
              {playList.length}
            </button>
          </div>
        </Operator>
        <audio
          ref={audioRef}
          onTimeUpdate={timeUpdate}
          onEnded={(e) => {
            handleMusicEnded();
          }}
        />
        {showVolumn && <LJPlayerVolume />}
        {showPannel && <LJPlayerPanel />}
      </div>
    </PlaybarWrapper>
  );
});
