import React from 'react';
import reportsData from '../../samplejson/reports';

class Report extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      reports: [],
    };
  }

  async componentDidMount () {
    setTimeout (() => {
      const reports = reportsData; //TODO: await api.getReports()
      this.setState ({reports});
    }, 1500);
  }

  render () {
    console.log (this.state);

    return (
      <div className="Report">
        <h1>Report Screen</h1>

          {this.state.reports.length > 0

            ? this.state.reports.map ((report, index) => (

                <div>
                  <h4 key={index}>{report.user_first_name}</h4>
                  <button OnClick= {()=> <div>{report}</div>}>data</button>
                  <button>erase</button>
                  <button>update</button>
                  <button>read</button>
                </div>
              ))
            : <h2>Loading...</h2>}
      </div>
    );
  }
}
export default Report;
