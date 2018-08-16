import React, { Component } from 'react'
import Header from './shared/Header'
import ArtistList from './artists/list'
import ArtistForm from './artists/form'

class App extends Component {
  constructor () {
    super()
    this.state = {
      artists: [
        { id: 1, name: 'Drake', genre: 'hip-hop' },
        { id: 2, name: 'Fugees', genre: 'hip-hop' },
        { id: 3, name: 'A Tribe Called Quest', genre: 'hip-hop' }
      ]
    }
  }

  render() {
    return (
      <main>
        <Header />
        <section className="container">
          <div className="row">
            <div className="col">
              <h2 className="h4 text-center">All Artists</h2>
              <ArtistList artists={ this.state.artists } />
            </div>
            <div className="col-4">
              <h2 className="h4 text-center">Add a new Artist</h2>
              <ArtistForm />
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default App
