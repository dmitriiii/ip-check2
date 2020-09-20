import React from 'react';

class Top extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div className="row m5ip__top-row">
				<div className="col-md-6">
					IP:
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
					</div>
				</div>				
			</div>
		);
	}
}

export default Top;
