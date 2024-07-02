import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const { name } = params;
  return {
    props: {
      slug,
    },
  };
}

function Greet(props) {
  const { query } = useRouter();
  console.log(query);
  return <h1>Hello, {query.slug}!</h1>;
}

export default Greet;
