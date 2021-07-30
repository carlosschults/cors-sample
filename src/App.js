import { useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  async function fetchArticlesHandler(){
    const response = await fetch('http://localhost:8002/articles');
    const data = await response.json();

    const transformedArticles = data.map((x) => {
        return {
            id: x.Id,
            title: x.Title
        };
    });

    setArticles(transformedArticles);
  }

  useEffect(() => {
    fetchArticlesHandler()
}, []);

  return (
    <div>
        <ul>
        {articles.map(x => <li key={x.id}>{x.id} - {x.title}</li>)}
        </ul>
    </div>
  );
}

export default App;
