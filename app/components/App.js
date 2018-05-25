var React = require('react');
var Popular = require('./Popular');

// Modern React component uses js6 class
class App extends React.Component {
  render() {
   return (
     <div className='container'>
       <Popular />
     </div>  
   ) 
  }
}

module.exports = App;