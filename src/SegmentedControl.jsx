
import '../style';

import React from 'react';
import classNames from 'classnames';
import Touchable from 'rc-touchable';


class SegmentedControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedIndex !== this.state.selectedIndex) {
      this.setState({
        selectedIndex: nextProps.selectedIndex,
      });
    }
  }

  onClick(e, index, value) {
    const { disabled, onChange, onValueChange } = this.props;
    if (!disabled && this.state.selectedIndex !== index) {
      // just do a mock so that the api to be the same as react-native
      e.nativeEvent = e.nativeEvent ? e.nativeEvent : {};
      e.nativeEvent.selectedSegmentIndex = index;
      e.nativeEvent.value = value;
      if (onChange) {
        onChange(e);
      }
      if (onValueChange) {
        onValueChange(value);
      }
      this.setState({
        selectedIndex: index,
      });
    }
  }

  renderSegmentItem(idx, value, selected) {
    const { prefixCls, disabled, tintColor } = this.props;

    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-selected`]: selected,
    });

    const itemStyle = {
      color: selected ? '#fff' : tintColor,
      backgroundColor: selected ? tintColor : '#fff',
      borderColor: tintColor,
    };
    return (
      <Touchable
        key={idx}
        disabled={disabled}
        activeClassName={`${prefixCls}-item-active`}
      >
        <div
          className={itemCls}
          style={itemStyle}
          onClick={disabled ? undefined : (e) => this.onClick(e, idx, value)}
        >
          <div className={`${prefixCls}-item-inner`} />
          {value}
        </div>
      </Touchable>
    );
  }

  render() {
    const { className, prefixCls, style, disabled, values = [] } = this.props;

    const wrapCls = classNames({
      [className]: !!className,
      [`${prefixCls}`]: true,
      [`${prefixCls}-disabled`]: disabled,
    });

    return (
      <div className={wrapCls} style={style}>
        {values.map((value, idx) => this.renderSegmentItem(idx, value, idx === this.state.selectedIndex))}
      </div>
    );
  }
}
SegmentedControl.defaultProps = {
  prefixCls: 'am-segment',
  selectedIndex: 0,
  disabled: false,
  values: [],
  onChange() {},
  onValueChange() {},
  style: {},
};
SegmentedControl.propTypes = {
  tintColor: React.PropTypes.string,
  disabled:React.PropTypes.bool,
  selectedIndex:React.PropTypes.number,
  values:React.PropTypes.arrayOf(React.PropTypes.string),
  onChange:React.PropTypes.func,
  onValueChange:React.PropTypes.func,
  style:React.PropTypes.any,
  /* web only */
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
  touchFeedback:React.PropTypes.bool,
};
SegmentedControl.displayName = "SegmentedControl";
module.exports=SegmentedControl;
