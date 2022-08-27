import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./index";
import { FetchFromApi } from "../utils/FetchFromAPI";

const ChannelDetails = () => {
  const { id } = useParams();
  const [ChannelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );
    FetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(60deg, rgba(238,115,48,1) 3%, rgba(213,8,8,1) 36%, rgba(185,24,70,1) 70%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={ChannelDetails} marginTop="-105px" />
      </Box>

      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
