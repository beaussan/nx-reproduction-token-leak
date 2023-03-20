// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';


export function App() {
  return (
    <>
      Here is my token : <pre>{JSON.stringify(process.env, null, 2)}</pre>

      NX_CLOUD_ACCESS_TOKEN shouldn't be defined, but here it is : {process.env.NX_CLOUD_ACCESS_TOKEN}

      <div />
    </>
  );
}

export default App;
