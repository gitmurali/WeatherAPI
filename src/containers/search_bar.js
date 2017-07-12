import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    render() {
        return (
            <form className="input-group">
                <input className="form-control" />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

SearchBar.propTypes = {};
SearchBar.defaultProps = {};

export default SearchBar;
