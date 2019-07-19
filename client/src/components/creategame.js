import React, { Component } from "react";

class CreateGame extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateGameObject = this.updateGameObject.bind(this);
    this.state = {
      game: {
        question: "",
        options: "",
        totalwinners: 0,
        date: "",
        answer: ""
      }
    };
  }
  handleInputChange(e) {
    const game = this.state.game;

    this.setState({
      game: { ...game, [e.target.id]: e.target.value }
    });
  }

  updateGameObject(e) {
    e.preventDefault();
    const game = this.state.game;
    const { updateGameObject } = this.props;
    updateGameObject(game);
  }

  render() {
    const { updateGameObject } = this.props;
    const { question, options, totalwinners, date, answer } = this.state.game;
    return (
      <div className="tp-create-game">
        <h3 style={{ padding: 10, paddingLeft: 0 }}>Create a new game</h3>
        <form onSubmit={this.updateGameObject}>
          <div>
            <input
              type="text"
              className="tp-input-field"
              placeholder="question"
              id="question"
              required
              value={question}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="tp-input-field"
              placeholder="options"
              value={options}
              required
              id="options"
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="total winners"
              value={totalwinners}
              className="tp-input-field"
              id="totalwinners"
              required
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Answer"
              value={answer}
              className="tp-input-field"
              id="answer"
              required
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type="date"
              id="date"
              className="tp-input-field"
              placeholder="Choose date"
              onChange={this.handleInputChange}
              value={date}
            />
          </div>

          <div>
            <button className="tp-auth-btn">Create game</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateGame;