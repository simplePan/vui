import React, {
  Component,
  PropTypes,
} from 'react';

export default class AppView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        V UI Framework
        {this.props.children}
      </div>
    )
  }
}

AppView.propTypes = {
  children: PropTypes.any,
  routes: PropTypes.array.isRequired
};
