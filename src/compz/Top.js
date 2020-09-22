import React from 'react';

class Top extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="row m5ip__top-row">
				<div className="col-md-6">
				<h2>IP: {this.props.datta.appUserIp}</h2>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<input type="email" className="form-control" id="exampleInputEmail1" value={this.props.datta.sharingUrl} readOnly/>
					</div>
				</div>				
			</div>
		);
	}
}

export default Top;
