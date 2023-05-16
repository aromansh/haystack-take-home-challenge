import "./NavBar.css";

export default function NavBar() {
	return (
		<nav className="nav-bar">
			<h1 className="nav-bar__heading-prefix">PHOTO</h1>
			<h1 className="nav-bar__heading-suffix">SEARCH</h1>

			<p className="nav-bar__subheading">powered by Flickr</p>
		</nav>
	);
}
