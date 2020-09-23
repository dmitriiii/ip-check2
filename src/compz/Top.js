import React from 'react';

class Top extends React.Component {
	constructor(props) {
		super(props);
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
							<button className="btn btn-outline-secondary" type="button">Copy</button>
							<a href={this.props.datta.pageUrl} className="btn btn-outline-secondary" type="button">Test Again</a>
						</div>
					</div>
				</div>				
			</div>
		);
	}
}

export default Top;
