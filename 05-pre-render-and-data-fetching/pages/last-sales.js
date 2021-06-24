import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  //const [loading, setLoading] = useState(false);

  const {data, error} = useSWR('https://nextjs-course-udemy-default-rtdb.europe-west1.firebasedatabase.app/sales.json');

  useEffect(() => {
    if(data) {
      const transformedSales = [];

      for(const key in data) {
        transformedSales.push({id: key, username: data[key].username, volume: data[key].volume});
      }

      setSales(transformedSales);
    }
  }, [data]);

  /*useEffect(() => {
    setLoading(true);
    fetch('https://nextjs-course-udemy-default-rtdb.europe-west1.firebasedatabase.app/sales.json').then(rawResp => {
      return rawResp.json();
    }).then(data => {
      const transformedSales = [];

      for(const key in data) {
        transformedSales.push({id: key, username: data[key].username, volume: data[key].volume});
      }

      setSales(transformedSales);
      setLoading(false);
    });
  }, []);*/

  if(error) {
    return <p>Failed to load</p>;
  }

  if (!data && !sales) {
    return <p>Loading ...</p>;
  }

  return (
    <ul>
      {sales.map(sale => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)}
    </ul>
  )
};

export async function getStaticProps(props) {
  const repsonse = await fetch('https://nextjs-course-udemy-default-rtdb.europe-west1.firebasedatabase.app/sales.json');
  const data = await repsonse.json();
    
  const transformedSales = [];

  for(const key in data) {
    transformedSales.push({id: key, username: data[key].username, volume: data[key].volume});
  }

  return {props: {sales: transformedSales}};
}