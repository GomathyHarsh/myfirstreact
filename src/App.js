import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

function App() {
  var cardDetails=[
    {
      planName:"Free",
      price:0,
      features:[
        {
          name:"Single User",
          isEnabled:true,
        },
        {
          name:"5GB Storage",
          isEnabled:true,
        },
        {
          name:"Unlimited Public Projects",
          isEnabled:true,
        },
        {
          name:"Community Access",
          isEnabled:true,
        },
        {
          name:"Unlimited Private Projects",
          isEnabled:false,
        },
        {
          name:"Dedicated Phone Support",
          isEnabled:false,
        },
        {
          name:"Free Subdomain",
          isEnabled:false,
        },
        {
          name:"Monthly Status Reports",
          isEnabled:false,
        },
      ],
    },
    {
      planName:"PLUS",
      price:9,
      features:[
        {
          name:"5 User",
          isEnabled:true,
        },
        {
          name:"50GB Storage",
          isEnabled:true,
        },
        {
          name:"Unlimited Public Projects",
          isEnabled:true,
        },
        {
          name:"Community Access",
          isEnabled:true,
        },
        {
          name:"Unlimited Private Projects",
          isEnabled:true,
        },
        {
          name:"Dedicated Phone Support",
          isEnabled:true,
        },
        {
          name:"Free Subdomain",
          isEnabled:true,
        },
        {
          name:"Monthly Status Reports",
          isEnabled:false,
        },
      ],
    },
    {
      planName:"PRO",
      price:49,
      features:[
        {
          name:"Unlimited",
          isEnabled:true,
        },
        {
          name:"150GB Storage",
          isEnabled:true,
        },
        {
          name:"Unlimited Public Projects",
          isEnabled:true,
        },
        {
          name:"Community Access",
          isEnabled:true,
        },
        {
          name:"Unlimited Private Projects",
          isEnabled:true,
        },
        {
          name:"Dedicated Phone Support",
          isEnabled:true,
        },
        {
          name:"Unlimited Free Subdomain",
          isEnabled:true,
        },
        {
          name:"Monthly Status Reports",
          isEnabled:true,
        },
      ],
    },
  ]
  return (
    <div className="container py3">
      <header>
       <main>
        <div className="row row-cols-md-3 mb-3 text-center">
        {cardDetails.map((card)=>{
          return <Card card={card}></Card>
        })

        }
        </div>
       </main>
      
      </header>
    </div>
  
  );
}

export default App;
