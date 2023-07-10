function App() {
  console.log("process.env.URl_TEST_BROWSER", process.env.URl_TEST_BROWSER);
  return <>{String(process.env.URl_TEST_BROWSER)}</>;
}

export default App;
