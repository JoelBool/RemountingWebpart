import * as React from 'react';
import styles from './Remounting.module.scss';
import { IRemountingProps } from './IRemountingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ActionButton } from 'office-ui-fabric-react';

// added
export interface IRemountingState{
  count: number;
}

export default class Remounting extends React.Component<IRemountingProps, IRemountingState> {

  // added
  public componentDidMount(){
    if(console && console.log){
      console.log("Component did mount")
      console.log("state = ", this.state)
    }
  }

  // added
  public componentDidUpdate(){
    if(console && console.log){
      console.log("Component did update")
      console.log("state = ", this.state)
    }
  }

  // added
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }

  }

  public render(): React.ReactElement<IRemountingProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.remounting} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
          <div>Web part count state: <strong>{this.state.count}</strong></div>
          <ActionButton
            text="Count"
            onClick={ () => {
              let count = this.state.count;
              count++;
              this.setState({
                count: count
              })
            }
           }>

          </ActionButton>
        </div>
      </section>
    );
  }
}
