import React, {
  Component,
} from 'react';

export default class HomeView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="guideHome">
        <div className="guideHome__panel">
          <div className="guideHome__panelTitle">
            Welecto to VUI Framework
          </div>
          <div className="guideHome__panelText">
            Get started by clicking the menu
          </div>
        </div>
      </div>
    )
  }
}
