import React from 'react';
import reportsData from '../../../samplejson/reports';
import './style.css';

class Report extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      reports: [],
      isDisplay: false,
    };
  }

  async componentDidMount () {
    setTimeout (() => {
      const reports = reportsData; //TODO: await api.getReports()
      this.setState ({reports: reports});
    }, 1500);
  }

  displayData = () => {
    this.setState ({isDisplay: true});
  };

  render () {
    console.log (this.state);

    return (
      <div className="Report">
        <h1>Report Screen</h1>

        {this.state.reports.length > 0
          ? this.state.reports.map ((report, index) => (
              <div key={index} className="cardContainer">
                <h6>{report.user_first_name}</h6>
                <p>{report.title}</p>
                <button onClick={this.displayData}>data</button>
                <button>erase</button>
                <button>update</button>
                <button>read</button>
              </div>
            ))
          : <h2>Loading...</h2>}
        {this.state.isDisplay
          ? <div>
              {this.state.reports.map ((report, index) => (
                <h6 key={'report' + index}>{report.report_date}</h6>
              ))}
            </div>
          : ''}
      </div>
    );
  }
}
export default Report;
