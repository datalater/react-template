const App = () => {
  return (
    <div>
      <h1>다시 수정</h1>

      <div>
        <span>See who&apos;s waiting for you </span>
        <button type="button" onClick={() => window.location.reload()}>
          😸
        </button>
        <div>
          <img
            width="600"
            src="https://cataas.com/cat/cute/says/hello"
            alt="picture"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
