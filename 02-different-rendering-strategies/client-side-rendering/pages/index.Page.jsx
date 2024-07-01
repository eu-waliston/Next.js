//Using the process.browser variable

function IndexPage() {
  const side = process.browser ? "client" : "server";
  return <div>You're currently on the {side}-side.</div>;
}
export default IndexPage;
