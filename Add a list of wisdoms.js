function ListWisdoms(props){
  return <li>{props.value}</li>;
}

function WisdomList(props){
  var wisdoms= props.wisdoms;
  var listWisdoms = wisdoms.map((wisdoms)=>
       <ListWisdoms  value={wisdoms}/> );
                                
   return(
                           
     <ul> {listWisdoms}</ul>);
  
}

var wisdoms =[
  "This is a wisdoms",
  "This is another wisdoms",
  "Hey see here"
];


ReactDOM.render(
  <WisdomList wisdoms={wisdoms} />,
  document.getElementById('root')
);



