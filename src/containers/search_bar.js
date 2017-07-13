import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state = { term:'' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({
			term: event.target.value
		})
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input className="form-control"
					   value={this.state.term}
					   placeholder="get 5 day forecast in your favourite cities"
					   onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather: fetchWeather }, dispatch); // dispatch make sures that action creator passes thru the middleware and then reducers.
}

SearchBar.propTypes = {};
SearchBar.defaultProps = {};

export default connect(null, mapDispatchToProps)(SearchBar);
