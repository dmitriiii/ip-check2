import React from 'react';

class Details extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div className="row m5ip__details-row">
				<div className="col-md-12">
					<div className="table-responsive-md">
						<table className="table table-striped table-hover">
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>			
			</div>
		);
	}
}

export default Details;
