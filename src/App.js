import './App.css';
import Loading from './component/loading';
import PlaceHolder from './component/placeholder';

function App() {
	return (
		<>

			<PlaceHolder />

			<Loading />
		
		{/* {(() => {
			const options = [];

			for (let i = 0; i < 5; i++) {
				options.push(<PlaceHolder />)
			}
			return options;
		})()} */}
		</>
	);
}

export default App;
