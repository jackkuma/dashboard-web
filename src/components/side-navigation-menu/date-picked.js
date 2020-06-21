import React from 'react';
import TreeView from 'devextreme-react/tree-view';
import { dateItem } from '../../date-item-data';

class DatePick extends React.Component {
  constructor() {
    super();
    this.treeViewRef = React.createRef();
    const showCheckBoxesModes = ['normal', 'selectAll', 'none'];
    const selectionModes = ['multiple', 'single'];
    const showCheckBoxesMode = showCheckBoxesModes[0];
    const selectionMode = selectionModes[0];
    this.state = {
        dateItem,
      selectedDateItem: [],
      selectNodesRecursive: true,
      selectByClick: true,
      showCheckBoxesMode,
      selectionMode,
      isSelectionModeDisabled: true,
      isRecursiveDisabled: false
    };
    this.treeViewSelectionChanged = this.treeViewSelectionChanged.bind(this);
    this.treeViewContentReady = this.treeViewContentReady.bind(this);
    this.showCheckBoxesModeValueChanged = this.showCheckBoxesModeValueChanged.bind(this);
    this.selectionModeValueChanged = this.selectionModeValueChanged.bind(this);
    this.selectNodesRecursiveValueChanged = this.selectNodesRecursiveValueChanged.bind(this);
    this.selectByClickValueChanged = this.selectByClickValueChanged.bind(this);
  }
  render() {
    return (
        <div className="form">
          <h4>Employees</h4>
          <TreeView
            id="treeview"
            keyExpr={dateItem.id}
            ref={this.treeViewRef}
            items={this.state.dateItem}
            selectNodesRecursive={this.state.selectNodesRecursive}
            selectByClick={this.state.selectByClick}
            showCheckBoxesMode={this.state.showCheckBoxesMode}
            selectionMode={this.state.selectionMode}
            onSelectionChanged={this.treeViewSelectionChanged}
            onContentReady={this.treeViewContentReady}
            itemRender={renderTreeViewItem}
          />
        </div>
    );
  }

  treeViewSelectionChanged(e) {
    this.syncSelection(e.component);
  }

  treeViewContentReady(e) {
    this.syncSelection(e.component);
  }

  syncSelection(treeView) {
    const selectedDateItem = treeView.getSelectedNodes()
      .map((node) => { return {
        fullName: node.itemData.fullName,
        prefix: node.itemData.prefix,
        position: node.itemData.position
      }; });
    this.setState(() => {
      return { selectedDateItem: selectedDateItem };
    });
  }

  showCheckBoxesModeValueChanged(e) {
    let state = { showCheckBoxesMode: e.value };

    if(e.value === 'selectAll') {
      state.selectionMode = 'multiple';
      state.isRecursiveDisabled = false;
    }
    state.isSelectionModeDisabled = e.value === 'selectAll';

    this.setState(state);
  }

  selectionModeValueChanged(e) {
    let state = { selectionMode: e.value };

    if(e.value === 'single') {
      state.selectNodesRecursive = false;
      this.treeView.unselectAll();
    }
    state.isRecursiveDisabled = e.value === 'single';

    this.setState(state);
  }

  selectNodesRecursiveValueChanged(e) {
    this.setState({ selectNodesRecursive: e.value });
  }

  selectByClickValueChanged(e) {
    this.setState({ selectByClick: e.value });
  }

  get treeView() {
    return this.treeViewRef.current.instance;
  }
}

function renderTreeViewItem(item) {
  return `${item.fullName} (${item.position})`;
}

// function renderListItem(item) {
//   return `${item.prefix} ${item.fullName} (${item.position})`;
// }

export default DatePick;