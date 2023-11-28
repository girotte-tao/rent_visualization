import TableauReport from 'tableau-react';
import React, { Component } from 'react';
// import tableau from 'tableau-api';

const url = "https://prod-apnortheast-a.online.tableau.com/t/wanghaonian/views/renting/1"

const url_public = "https://public.tableau.com/views/wb1_16971689620300/Dashboard1?:language=en-GB&:display_count=n&:origin=viz_share_link"

const html = "<script type='module' src='https://prod-apnortheast-a.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js'></script><tableau-viz id='tableau-viz' src='https://prod-apnortheast-a.online.tableau.com/t/wanghaonian/views/renting/1/ae639bfc-73ba-405b-ae53-2e1da727f1cc/1' width='1150' height='740' hide-tabs toolbar='bottom' ></tableau-viz>"


const new_url = "https://prod-apnortheast-a.online.tableau.com/#/site/wanghaonian/views/renting/1?:iid=2"

const s = {
    width: "50%",
}

const Page5 = props => (
    <TableauReport
        style={s}
        url={url}
    />
//     <iframe src={url}
//  width="645" height="955"></iframe>
    // <div dangerouslySetInnerHTML={{ __html: html }} />
)



 
// class Page5 extends Component {
//   componentDidMount() {
//     this.initTableau()
//   }
 
//   initTableau() {
//     const vizUrl = url;
//     const vizContainer = this.vizContainer;
//     let viz = new window.tableau.Viz(vizContainer, vizUrl)
//   }
 
//   render() {
//     return (
//       <div ref={(div) => { this.vizContainer = div }}>
//       </div>
//     )
//   }
// }
 
// export default Visualization;

export default Page5;