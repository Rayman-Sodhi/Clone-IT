import React from "react";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../../atoms/playlistAtom";
import { songOverviewState } from "../../atoms/songOverview";
import { changeTime } from "../../lib/lib";

export default function Tracks({ tracks }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 text-white mt-24 px-4 sm:space-x-8 space-y-2 sm:space-y-0">
      <BigCard data={tracks?.items?.[0]} />
      <SmallCard data={tracks?.items} />
    </div>
  );
}

const SmallCard = ({ data }) => {
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  const [songOverview, setSongOverview] = useRecoilState(songOverviewState);
  return (
    <div>
      <p className="text-xl font-bold">Songs</p>
      <div className="flex flex-col">
        {data?.map((item, index) => {
          if (index == 0) return null;
          else {
            return (
              <div
                className="flex items-center justify-between hover:bg-[#181818] cursor-pointer p-1 rounded-sm"
                key={index}
                onClick={function () {
                  setPlaylistId("songOverview");
                  setSongOverview(item);
                }}
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={item?.album?.images?.[2]?.url}
                    alt=""
                    className="w-12 h-12"
                  />
                  <p className="flex justify-start w-20 h-14 overflow-y-scroll scrollbar-hide">
                    {item?.album?.name}
                  </p>
                </div>
                <p className="opacity-80">{changeTime(item?.duration_ms)}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

const BigCard = ({ data }) => {
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  const [songOverview, setSongOverview] = useRecoilState(songOverviewState);
  return (
    <div>
      <p className="text-xl font-bold">Top Result</p>
      <div
        className="bg-[#181818] w-full p-3 rounded-sm cursor-pointer hover:opacity-80"
        onClick={function () {
          setPlaylistId("songOverview");
          setSongOverview(data);
        }}
      >
        <img
          src={data?.album?.images?.[2]?.url}
          alt=""
          className="rounded-sm"
        />
        <p className="mt-3 font-bold text-xl truncate">{data?.album?.name}</p>
        <div className="flex space-x-4 items-center">
          <p className="opacity-80 truncate">
            {data?.album?.artists?.[0]?.name}
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl">SONG</p>
        </div>
      </div>
    </div>
  );
};
