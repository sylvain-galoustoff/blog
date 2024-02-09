function DemoCardPlaceholder() {
  return (
    <>
      <FakeCard />
      <FakeCard />
    </>
  );
}

export default DemoCardPlaceholder;

function FakeCard() {
  return (
    <div className="demo-card fake-card">
      <h2 className="demo-card-title placeholder"></h2>
      <div className="demo-card-thumbnail placeholder"></div>
      <div className="demo-card-button placeholder"></div>
    </div>
  );
}
