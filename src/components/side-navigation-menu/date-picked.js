import React from 'react';
import TreeView from 'devextreme-react/tree-view';

import { products } from '../../date-item-data.js';

class DatePick extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'contains'
    };
    this.valueChanged = this.valueChanged.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <TreeView
          id="treeview"
          items={products}
          width={500}
          searchMode={this.state.value}
          searchEnabled={true}
        />
      </React.Fragment>
    );
  }
  valueChanged(e) {
    this.setState({ value: e.value });
  }
}

export default DatePick;