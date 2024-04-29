import { ThemeProvider } from "styled-components";
import { theme } from "./stylesTheme/Theme";
import { MainBody, Container } from "./StyledComponents/Global.styled";
//import components
import { Showcase } from "./components/Showcase";
import { MySkills } from "./components/MySkills";
import { MyProjects } from "./components/MyProjects";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainBody>
				<Container>
					<Showcase />
					<MySkills />
					<MyProjects />
				</Container>
			</MainBody>
		</ThemeProvider>
	);
}

export default App;
