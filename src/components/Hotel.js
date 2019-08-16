import React from "react";
import Box from "@material-ui/core/Box";

import HotelDetails from "./HotelDetails";
import HotelList from "./HotelList";

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: {
        name: "",
        code: "",
        starRating: 0,
        price: 0,
        phoneNumber: "",
        location: {},
        media: [],
        description: "",
        details: []
      },
      code: "",
      list: []
    };
    this.getHotelInfo = this.getHotelInfo.bind(this);
    this.getAllHotelsInfo = this.getAllHotelsInfo.bind(this);
  }
  componentDidMount() {
    this.loadAllHotelsRequest();
    this.loadHotelRequest();
  }

  loadAllHotelsRequest() {
    var url = "/api/hotels";

    fetch(url)
      .then(res => res.json())
      .then(response => this.getAllHotelsInfo(response))
      .catch(error => console.error("Error:", error));
  }

  loadHotelRequest() {
    var url = "/api/hotels/venetian";

    fetch(url)
      .then(res => res.json())
      .then(response => this.getHotelInfo(response))
      .catch(error => console.error("Error:", error));
  }

  getHotelInfo(data) {
    //console.log(data);
    this.setState({ hotel: data });
  }

  getAllHotelsInfo(data) {
    // console.log(data);
    this.setState({ code: data.code, list: data.list });
  }

  getImage(data, type) {
    var toRet = "";
    if (data.length) {
      toRet = data.find(item => item["type"] === type).href;
    }
    return toRet;
  }

  renderCode(str) {
    return str
      .toUpperCase()
      .split("_")
      .join(" ");
  }

  render() {
    const { hotel, code, list } = this.state;

    return (
      <Box display="flex" flexDirection="column">
        <div>
          &nbsp;
          <span>&#x2190;</span> SEE {this.renderCode(code)}
        </div>
        <Box display="flex">
          <Box m={2} display="flex" flexDirection="column">
            <Box marginBottom={2}>
              <img src={this.getImage(hotel.media, "productImage")} />
            </Box>
            <HotelList data={list} />
          </Box>
          <HotelDetails data={hotel} index={0}/>
        </Box>
      </Box>
    );
  }
}
export default Hotel;
