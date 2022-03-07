import React from "react";
import unsplash from "../api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("search/photos", {
      params: {
        query: term,
        per_page: "50",
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="root_div">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
