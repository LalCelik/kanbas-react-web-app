function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    return (
      <>
        <h3>JSON Stringify</h3>
        squares = {JSON.stringify(squares)}
  squares = {squares} //vs. Normal array
      </>
    );
  }
  export default JsonStringify;