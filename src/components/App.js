import React from "react";
import Navigation from "./Navigation";
import Title from "./Title";
import SearchBox from "./SearchBox";
import Category from "./Category";
import ImageList from "./ImageList";
import Footer from "./Footer";
import data from "../data/data"; //IMPORT DATA FOR IMAGE AND ICON
import weather from "../api/weather";

const text = "Where would you like to go?";
const [country, category, footer] = data;
const detail = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: [] };
  }
  componentDidMount() {
    country.forEach(async (c) => {
      const { data } = await weather.get("/weather", {
        params: {
          q: c.capital,
          appid: "190ed9c24baf34967202a15934120510",
          units: "metric",
        },
      });
      detail.push(data);
      this.setState({current: detail})
    });
    
  }

  render() {
    return (
      <>
        <Navigation />
        <Title text={text} textSize="text-3xl" />
        <SearchBox />
        <div className="mt-5">
          <Title text="Category" textSize="text-lg" />
          <Category category={category} />
        </div>
        <ImageList
          country={country}
          current={this.state.current.length !== 0 ? this.state.current : []}
        />
        <Footer icons={footer} />
      </>
    );
  }
}

export default App;
