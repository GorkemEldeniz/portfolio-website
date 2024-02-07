import { ModeToggle } from "@components/mode-toggle";
import { Button } from "@components/ui/button";

function App() {
	return (
		<div>
			<ModeToggle />
			<div className='text-3xl font-bold underline'>Hello world!</div>
			<Button>Tıkla</Button>
		</div>
	);
}

export default App;
