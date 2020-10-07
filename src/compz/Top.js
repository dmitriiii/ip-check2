import React from 'react';

class Top extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			butt: 'Copy',
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((state, props) => ({
			butt: 'Copied!'
		}));
		setTimeout(function(){ 
			this.setState((state, props) => ({
				butt: 'Copy'
			}));
		}.bind(this), 1000);

		// var text = "Example text to appear on clipboard";
		navigator.clipboard.writeText( this.props.datta.sharingUrl ).then(function() {
			console.log('Async: Copying to clipboard was successful!');
		}, function(err) {
			console.error('Async: Could not copy text: ', err);
		});
	}

	render() {
		return (
			<div className="row m5ip__top-row">
				<div className="col-md-4">
				<h2>IP: {this.props.datta.appUserIp}</h2>
				</div>
				<div className="col-md-8">
					<div className="input-group">
						<input type="text" className="form-control" placeholder={this.props.datta.sharingUrl}  readOnly/>
						<div className="input-group-append">
							<button className="btn btn-outline-secondary" type="button" onClick={this.handleClick}>{this.state.butt}</button>
							<a href={this.props.datta.pageUrl} className="btn btn-outline-secondary" type="button">Test Again</a>
						</div>
					</div>
				</div>				
			</div>
		);
	}
}

export default Top;
