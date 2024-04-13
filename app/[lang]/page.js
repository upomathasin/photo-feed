import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  console.log(process.env.BASE_API_URL);

  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = response.json();
  return <h1>Welcome to photo feed upoma !{dictionary.followers}</h1>;
}
