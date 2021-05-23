import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import StoryCarousel from "../components/StoryCarousel";
import CarouselItem from "../components/CarouselItem";
import "../assets/styles/App.scss";

const Home = ({ saved, trends }) => {
  return (
    <>
      <Header />
      <Hero />
      <div className="main__container">
        <Categories title="Tendencias">
          <StoryCarousel>
            {trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </StoryCarousel>
        </Categories>
        {saved.length > 0 && (
          <Categories title="Mi lista">
            <StoryCarousel>
              {saved.map((item) => (
                <CarouselItem key={item.id} {...item} isList />
              ))}
            </StoryCarousel>
          </Categories>
        )}
      </div>
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
