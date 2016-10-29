/**
 * Created by q.chen on 2016/10/27.
 * City input
 */
import Animate from 'rc-animate';
import React, { Component, PropTypes } from 'react';
import './CityInput.css';

const classnames = require('classnames');

const UNSELECTABLE_STYLE = {
    userSelect: 'none',
    WebkitUserSelect: 'none',
};
const ENTER_KEY_CODE = 13;

class CityInput extends Component {
    static defaultProps = {
        disabled: false,
        open: false
    };

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    componentDidUpdate() {
        const inputNode = this.getSearchInputDOM();
        const mirrorNode = this.getSearchInputMirrorDOM();
        if (inputNode.value) {
            inputNode.style.width = '';
            inputNode.style.width = `${mirrorNode.clientWidth}px`;
        } else {
            inputNode.style.width = '';
        }
    }

    onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.props.disabled) {
            return false;
        }
        this.props.openCityPanel(true);
        this.getSearchInputDOM().focus();
    }

    onInputChange(e) {
        let value = e.target.value;
        this.setInputValue(value);
    }

    onInputKeyDown(e) {
        let keyCode = e.keyCode;
        if (keyCode === ENTER_KEY_CODE) {
            let value = e.target.value;
            this.props.onAddCity(value);
            this.setInputValue('');
        }
    }

    setInputValue(inputValue) {
        this.setState({
            inputValue
        });
    }

    onRemoveCity(city, e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.props.disabled) {
            return false;
        }
        this.props.onRemoveCity(city);
    }

    getSearchInputDOM() {
        return this.refs.searchInput;
    }

    getSearchInputMirrorDOM() {
        return this.refs.searchInputMirror;
    }

    /**
     * render placeholder
     * @returns {XML} html to render
     */
    renderPlaceholder() {
        const placeholderStyle = this.props.placeholder ? {} : UNSELECTABLE_STYLE;
        return (
            <div unselectable="unselectable"
                className="ant-select-selection__placeholder"
                style={placeholderStyle}>
                {this.props.placeholder}
            </div>
        );
    }

    /**
     * render tag iterator
     * @param item data
     * @param index index
     * @returns {XML} city tag
     */
    renderTag(item, index) {
        const disabled = this.props.disabled;
        const choiceClassName = disabled
            ? `ant-select-selection__choice ant-select-selection__choice__disabled`
            : `ant-select-selection__choice`;
        const key = typeof item === 'string' ? item : item.key;
        const content = typeof item === 'string' ? item : item.label;
        return (
            <li style={UNSELECTABLE_STYLE}
                className={choiceClassName}
                key={key}
                title={content}>
                <div className="ant-select-selection__choice__content">
                    {content}
                </div>
                <span className="ant-select-selection__choice__remove" onClick={this.onRemoveCity.bind(this, item)} />
            </li>
        );
    }

    /**
     * render tags
     * @returns {*}
     */
    renderTags() {
        return this.props.value.map(this.renderTag.bind(this));
    }

    /**
     * render search input
     * @returns {XML}
     */
    renderInput() {
        return (
            <li className={classnames({
                'ant-select-search': true,
                'ant-select-search--inline': true
            })} key="li-searchInput">
                <div className="ant-select-search__field__wrap">
                    <input className="ant-select-search__field"
                        onChange={this.onInputChange.bind(this)}
                        onKeyDown={this.onInputKeyDown.bind(this)}
                        ref="searchInput"
                        disabled={this.props.disabled}
                        value={this.state.inputValue} />
                    <span className="ant-select-search__field__mirror" ref="searchInputMirror">
                        {this.state.inputValue}
                    </span>
                </div>
            </li>
        );
    }

    /**
     * render tag animate container
     * @returns {XML}
     */
    renderTagContainer() {
        let innerNode = [...this.renderTags(), this.renderInput()];
        return (
            <Animate
                component="ul"
                transitionName={'zoom'}>
                {innerNode}
            </Animate>
        );
    }

    render() {

        return (
            <div className={classnames({
                'ant-select': true,
                'ant-select-enabled': !this.props.disabled,
                'ant-select-disabled': this.props.disabled,
                'ant-select-focused': this.props.open
            })}
                style={this.props.style}
                onClick={this.onClick.bind(this)}>
                <div className={classnames({
                    'ant-select-selection': true,
                    'ant-select-selection--multiple': true
                })}
                    role={'combobox'}>
                    <div className={classnames({
                        'ant-select-selection__rendered': true
                    })}>
                        {this.renderTagContainer()}
                    </div>

                </div>
            </div>
        );
    }
}

CityInput.propTypes = {
    open: PropTypes.bool,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.array,
    openCityPanel: PropTypes.func,
    onAddCity: PropTypes.func,
    onRemoveCity: PropTypes.func
};

export default CityInput;
