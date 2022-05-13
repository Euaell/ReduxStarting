import './App.css';
import Loading from './component/loading';
import PlaceHolder from './component/placeholder';

function App() {
	return (
		<>

		<PlaceHolder />

		<Loading />
		{/* <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
			<span class="visually-hidden">Loading...</span>
		</div> */}

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
