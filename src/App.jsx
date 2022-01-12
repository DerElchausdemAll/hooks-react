import React, { useState, useCallback, useEffect } from "react";

const Code = ({ code }) => (
	<pre>
		<code>{JSON.stringify(code, null, 4)}</code>
	</pre>
);

// MousePosition //

const useMousePosition = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		// console.log("mount");
		const handleMouseMove = event_ => {
			const { pageX, pageY } = event_;
			setPosition({ x: pageX, y: pageY });
			// console.log("event_.pageX, event_.pageY")
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			// window.removeEventListener("mousemove", handleMouseMove);
			console.log("unmount");
		};
	}, []); // [an dieser Stelle leer] = dependency = zum Beispiel state, sprich nur wenn sich was im "state" verändert wird etwas ausgeführt

	return position;
};

// WindowSize //

// const useWindowSize = () =>

const App = () => {
	const position = useMousePosition();

	return (
		<div>
			<Code code={position} />
			<div
				style={{
					background: "red",
					position: "absolute",
					top: position.y,
					left: position.x,
				}}
			>
				Hello
			</div>
		</div>
	);
};

export default App;

// API Fetchen //////////////////////////////////////////////// 11.01.2022
//
//

//import React, { useState, useCallback, useEffect } from "react";
// import Button from "../src/components/Button";

// const Code = ({ code }) => (
// 	<pre>
// 		<code>{JSON.stringify(code, null, 4)}</code>
// 	</pre>
// );

// React internal hooks
// useState
// useEffect
// useMemo
// useRef
// useContexture
// useReducer
// useLayoutEffect
// useCallback
// useImperativeHandle
// useDebugValue

// const usePerson = () => {
// 	return { name: "Hannah" };
// };

// const useData = url => {
// 	const [data, setData] = useState(null);
// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		setLoading(true);
// 		setError(null);
// 		// setTimeout(() => {
// 		fetch(url)
// 			// ("/api/person.json")
// 			.then(respone => respone.json())
// 			.then(json => {
// 				setData(json);
// 			})
// 			.catch(error_ => {
// 				console.log(error);
// 				setError(error_);
// 			})
// 			.finally(() => {
// 				setLoading(false);
// 			});
// 		// }, 3000);
// 	}, [url]);

// 	return {
// 		data, // data: data
// 		loading, // loading: loading
// 		error, // error: error
// 	};
// };

// const App = () => {
// 	const [url, setUrl] = useState("/api/frusdit.json");
// 	const { data, loading, error } = useData(url);

// 	return (
// 		<div>
// 			<Code code={data} />

// 			<h1>{loading ? "Loading..." : "There you go"}</h1>
// 			{/* hier könnte jetzt statt loading ein loading spinner rein */}
// 			<h2>{error ? "Opps" : "No Error"}</h2>
// 			{/* hier könnte jetzt statt loading ein loading spinner rein */}

// 			<button
// 				onClick={() => {
// 					setUrl("/api/fruit.json");
// 				}}
// 			>
// 				Get Fruit
// 			</button>
// 			<button
// 				onClick={() => {
// 					setUrl("/api/person.json");
// 				}}
// 			>
// 				Get Person
// 			</button>
// 		</div>
// 	);
// };

// export default App;

///////////////////////////////////////////////////// Fetch Video bis Minute 13 ///////////// 10.01.2022

// const Code = ({ code }) => (
// 	<pre>
// 		<code>{JSON.stringify(code, null, 4)}</code>
// 	</pre>
// );

// // React internal hooks
// // useState
// // useEffect
// // useMemo
// // useRef
// // useContexture
// // useReducer
// // useLayoutEffect
// // useCallback
// // useImperativeHandle
// // useDebugValue

// const usePerson = () => {
// 	return { name: "Hannah" };
// };

// const App = () => {
// 	const [state, setState] = useState("Gregor");

// 	// Step const person = usePerson();
// 	// const { name } = usePerson();
// 	const handeClick = useCallback(() => {
// 		console.log(state);
// 	}, [state]);
// 	return (
// 		<div>
// 			<Code code={name} />
// 			<button
// 				onClick={() => {
// 					setState("Hannah");
// 				}}
// 			>
// 				Change Name
// 			</button>
// 			<button onClick={handeClick}>Hello</button>
// 		</div>
// 	);
// };
