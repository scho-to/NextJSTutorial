import { useRouter } from 'next/router';

function PortfolioProjectPage(props) {
  const router = useRouter();
  
  console.log(router.query);
  
  return (
    <div>
      <h1>The protfolio Project Page: {router.query.projectid}</h1>
    </div>
  );
}

export default PortfolioProjectPage;