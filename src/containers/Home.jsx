import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import "../assets/styles/App.scss";

const Home = ({ saved, trends }) => {
  console.log(trends);
  return (
    <>
      <Header />
      <Search />
      {saved.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {saved.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    saved: state.saved,
    trends: state.trends,
  };
};

export default connect(mapStateToProps, null)(Home);
