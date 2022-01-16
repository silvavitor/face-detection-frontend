import Header from './components/Header/Header';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import CustomParticles from './components/CustomParticles/CustomParticles';
import {} from 'dotenv/config';

import './App.css';
import { Component } from 'react';

const initialState = {
	input: '',
	imageUrl: '',
	boxes: [],
	route: 'signin',
	isSignedIn: false,
	user: {
		id: '',
		name: '',
		email: '',
		entries: 0,
		joined: ''
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = initialState
	}

	loadUser = (data) => {
		this.setState({
			user: {
				id: data.id,
				name: data.name,
				email: data.email,
				entries: data.entries,
				joined: data.joined
			}
		});
	}

	calculateFaceLocation = (data) => {
		const clarifaiRegions = data.outputs[0].data.regions;
		const image = document.getElementById('inputimage');
		const { width, height } = image;
		
		return clarifaiRegions.map(face => {
			const clarifaiFace = face.region_info.bounding_box;
			return {
				leftCol: clarifaiFace.left_col * width,
				topRow: clarifaiFace.top_row * height,
				rightCol: width - (clarifaiFace.right_col * width),
				bottomRow: height - (clarifaiFace.bottom_row * height)
			}
		});
	}

	displayFaceBox = (boxes) => {
		this.setState({ boxes });
	}

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	}

	onButtonSubmit = () => {
		this.setState({ imageUrl: this.state.input })
			fetch(`${process.env.REACT_APP_BACKEND_URL}/imageurl`, {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					url: this.state.input
				})
			})
			.then(response => response.json())
			.then(response => {
				if (response) {
					const faces = response.outputs[0].data.regions.length || 0;
					fetch(`${process.env.REACT_APP_BACKEND_URL}/image`, {
							method: 'put',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({
								id: this.state.user.id,
								faces: faces
							})
						})
						.then(response => response.json())
						.then(count => {
							this.setState(Object.assign(this.state.user, { entries: count }))
						})
						.catch(console.log);
				}
				this.displayFaceBox(this.calculateFaceLocation(response))
			})
			.catch(error => console.log(error));
	}

	onRouteChange = (route) => {
		if (route === 'signout') {
			this.setState(initialState)
		} else if (route === 'home') {
			this.setState({ isSignedIn: true, route: 'home' })
		} else {
			this.setState({ route });
		}
	};

	render() {
		let { isSignedIn, imageUrl, route, boxes } = this.state;
		return (
			<div className="App">
				<CustomParticles />
				<Header isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
				{
					route === 'home'
						?
							<div>
								<Rank user={this.state.user.name} entries={this.state.user.entries} />
								<ImageLinkForm
									onInputChange={this.onInputChange}
									onButtonSubmit={this.onButtonSubmit}
								/>
								<FaceRecognition boxes={boxes} imageUrl={imageUrl} />) 
							</div>
						: (
							route === 'signin'
								? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
								: <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
						)
				}

			</div>
		);
	}
}

export default App;
