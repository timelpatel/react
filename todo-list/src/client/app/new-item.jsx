import React from 'react';

class NewItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    addItem() {
        if (this.props.onClick) {
            this.props.onClick(this.state.inputValue)
        }
    }

    handleChange(e) {
        this.setState({inputValue: e.target.value});
    }

    handleClick(e) {
        this.addItem();
        // clear input field
    }

    render() {
        return (
            <div>
                <input
                    onBlur={this.handleChange.bind(this)}
                    type="text"
                />
                <input
                    onClick={this.handleClick.bind(this)}
                    type="submit"
                    value="Add"
                />
            </div>
        );
    }

}

export default NewItem;
