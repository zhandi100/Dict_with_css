var React=require("react");
var TermSearch=require("./termsearch");
var Definitions=require("./definitions");

var Maincomponent = React.createClass({
  render: function() {
    return <div  style={styles.container}>
    	<div style={styles.leftpanel}>
      <TermSearch/>
      </div>
      <div style={styles.rightpanel}>
      <Definitions/>
      </div>
    </div>;
  }
});
module.exports=Maincomponent;