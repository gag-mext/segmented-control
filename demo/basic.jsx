import React from 'react';
import ReactDOM from 'react-dom';
import SegmentedControl from '../src';
import WingBlank  from '@gag/wing-blank';

class SegmentedControlExample extends React.Component {
  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  onValueChange = (value) => {
    console.log(value);
  }
  render() {
    return (
      <WingBlank size="lg" className="sc-example">
        <p className="sub-title">最简</p>
        <SegmentedControl values={['切换一', '切换二']} />

        <p className="sub-title">禁用</p>
        <SegmentedControl values={['切换一', '切换二']} disabled />

        <p className="sub-title">默认选中一项</p>
        <SegmentedControl selectedIndex={1} values={['切换一', '切换二', '切换三']} />

        <p className="sub-title">主色调样式 tintColor</p>
        <SegmentedControl
          values={['切换一', '切换二', '切换三']}
          tintColor={'#ff0000'}
          style={{ height: '0.8rem', width: '5rem' }}
        />

        <p className="sub-title">事件</p>
        <SegmentedControl
          values={['切换一', '切换二', '切换三']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
      </WingBlank>
    );
  }
}

ReactDOM.render(<SegmentedControlExample />, document.getElementById('sk-root'));
