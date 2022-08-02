import React,{ Component } from 'react';

// function Welcome(props) { 
const Welcome = ({ name }) => {
    return (
        <div className='wrapper'>
            <h1>Welcome { name }!</h1>
            <p>functional Component</p>
        </div>
    );
};
export default Welcome;

class WelcomeClass extends Component {
    render() {
        return (
            <div className='wrapper'>
                <h1>Welcome { this.props.name }!</h1>
                <p>class Component</p>
            </div>
        );
    }
}
export { WelcomeClass };