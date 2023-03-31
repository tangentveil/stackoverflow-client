import React, {useEffect} from "react";
import "./Community.css";
import MainPost from "./MainPostContainer/MainPost";
import Rightbar from './RightSideContainer/Rightbar'
import LeftSidebar from '../../components/LeftSidebar'
import { useSelector } from "react-redux";
import { allPosts } from "../../actions/posts";
import { useDispatch } from "react-redux";

const Community = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(allPosts());
  },[dispatch])

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <div className="ComponentContainer">
        <MainPost />
        <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Community;
