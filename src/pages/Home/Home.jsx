import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {
  const news = useLoaderData()
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div><LeftSideNav></LeftSideNav></div>
        <div className="md:col-span-2">
          {
            news.map(singleNews=><NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
          }

        </div>
        <div><RightSideNav></RightSideNav></div>
      </div>
    </div>
  );
};

export default Home;