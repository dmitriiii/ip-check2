import React from 'react';


class Details extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// console.log(this.props);
		const responseProp = this.props.datta.response;
		console.log(responseProp);
		const rows = Object.keys(responseProp).map(function(keyName, keyIndex) {
			// use keyName to get current key's name
			// and a[keyName] to get its value
			return <tr key={keyIndex}>
								<td><strong>{keyName}</strong></td>
								<td>{responseProp[keyName]}</td>
							</tr>
		})
		return (
			<div className="row m5ip__details-row">
				<div className="col-md-12">
					<div className="table-responsive-md">
						<table className="table table-striped table-hover table-sm">
							<tbody>
								{rows}
							</tbody>
						</table>
					</div>
				</div>			
			</div>
		);
	}
}

export default Details;
