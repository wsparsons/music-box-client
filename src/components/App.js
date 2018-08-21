import React, { Component } from "react";
import Header from "./shared/Header";
import ArtistList from "./artists/list";
import ArtistForm from "./artists/form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllArtists } from "../actions/artists"

//// mapStateToProps connects the STATE from the REDUCER to the APP component 
//// DONT FORGET to wrap the artists with parenthesis
/// mapStateToProps = ({ artists }) /// this part if the state => ({ artists }) /// this part is the props from the state;
const mapStateToProps = ({ artists }) => ({ artists });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllArtists
}, dispatch)

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     artists: [
  //       { id: 1, name: "Drake", genre: "hip-hop" },
  //       { id: 2, name: "Fugees", genre: "hip-hop" },
  //       { id: 3, name: "A Tribe Called Quest", genre: "hip-hop" }
  //     ]
  //   };
  // }

  componentDidMount (){
    this.props.getAllArtists()
  }

  render() {
    return (
      <main>
        <Header />
        <section className="container">
          <div className="row">
            <div className="col">
              <h2 className="h4 text-center">All Artists</h2>
              <ArtistList artists={this.props.artists} />
            </div>
            <div className="col-4">
              <h2 className="h4 text-center">Add a new Artist</h2>
              <ArtistForm />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

//// DONT FORGET TO EXPORT WITH connect(mapStateToProps, mapDispatchToProps)(App) 
//// by using CONNECT, it connects the App to the reducer without having to import the artists from reducer
//// CONNECT is a function that is taking a callback function (which is mapStateToProps) and its returns a function which take the component App as an argument, it is connecting the state from the store to App as props 
export default connect(mapStateToProps, mapDispatchToProps)(App)
