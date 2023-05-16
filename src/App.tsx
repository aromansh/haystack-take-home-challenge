import { useEffect } from "react";
import ImageList from "./components/ImageList";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import "./App.css";
import store from "./state/store";
import { searchLatestImages } from "./state/actions";
import { searchImagesByEventTag } from "./utils/searchImagesByTag";

function App() {
	useEffect(() => {
		// Fill initial images
		store.dispatch(searchLatestImages());

		// Add event listener for when pressing back button (logic in diff file for easier testing)
		const callback = searchImagesByEventTag(store);
		window.addEventListener("popstate", callback);
		return () => window.removeEventListener("popstate", callback);
	}, []);

	return (
		<>
			<NavBar />
			<main>
				<SearchForm />
				<ImageList />
			</main>
		</>
	);
}

export default App;
