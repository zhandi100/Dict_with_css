var React=require("react");
var search=require("./search");
var actions=require("./actions");

var TermSearch=React.createClass({
	getInitialState:function() {
		return {
			tofind:""
			,matches:[" abc"," xyz"]};
	}
	,showdef:function(e) {
		var termpos=e.target.dataset.idx;
		actions.showDef(termpos);
	}
	,renderItem : function(item) {
		return <div 
		style={styles.item} onClick={this.showdef}
		data-idx = {item[1]}>{item[0]}</div>
	}
	,search:function() {
		var matches=search(this.state.tofind);
		this.setState({matches:matches});
	}
	,oninput:function(e) {
		this.setState({tofind:e.target.value});
		clearTimeout(this.timer);
		this.timer=setTimeout(function(){
			this.search();
		}.bind(this),500);
	}
	,render : function() {
		return <div>
			<input onInput={this.oninput}/>
			{this.state.matches.map(this.renderItem)}
		</div>
	}
});
module.exports=TermSearch;