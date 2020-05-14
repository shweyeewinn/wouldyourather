import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from 'react-redux';

//Component
import PollList from './PollList';

class PollTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: [],
      unAnswered: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.questions) {
      const answered = [];
      const unAnswered = [];

      Object.values(nextProps.questions).map((q) => {
        if (
          Object.keys(nextProps.users[nextProps.signedInUser].answers).includes(
            q.id
          )
        ) {
          answered.push(q);
        } else {
          unAnswered.push(q);
        }
      });

      return { answered, unAnswered };
    } else return null;
  }

  render() {
    const { users } = this.props;
    const { unAnswered, answered } = this.state;
    return (
      <div className="tabs-container">
        <Tabs>
          <TabList>
            <Tab>
              <h3>Unanswered Questions</h3>
            </Tab>
            <Tab>
              <h3>Answered Questions</h3>
            </Tab>
          </TabList>
          <TabPanel>
            <PollList questions={unAnswered} users={users} />
          </TabPanel>
          <TabPanel>
            <PollList questions={answered} users={users} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, signedInUser }) {
  const sortedQuestions = Object.values(questions).sort(
    (a, b) => b.timestamp - a.timestamp
  );
  return {
    signedInUser,
    users,
    questions: sortedQuestions,
  };
}

export default connect(mapStateToProps)(PollTabs);
