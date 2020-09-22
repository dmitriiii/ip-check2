import React from 'react';

class Locator extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const respProp = this.props.datta.response;
		const urll = 'https://maps.googleapis.com/maps/api/staticmap?center=' + 
								respProp.lat + ',' + respProp.lon + '&zoom=9&size=900x400&maptype=terrain&markers=color:blue|label:S|' + 
								respProp.lat + ',' + respProp.lon + '&key=AIzaSyCaSzFRjmMS_37Y79GNKcXRssf0_NGdX3Y';
		// console.log(respProp);
		// console.log(respProp.length);

		return (
			<div className="row m5ip__locator-row">
				<div className="col-md-12">
					{respProp &&
						<img src={urll} alt="Location" width="600" height="400"/>
					}
				</div>				
			</div>
		);
	}
}

export default Locator;
