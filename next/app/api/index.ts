const graphqlRequest = async (query: string) => {
  const url = process.env.NEXT_PUBLIC_BASEURL || "";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Conent-Type": "application/json"
    },
    body: JSON.stringify({
      query
    })
  });

  const data = await res.json();
  return data;
};

export default graphqlRequest;